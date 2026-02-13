import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { layouts } from "../data/mockData";
import type { LayoutType, Product, ProductGroup } from "../types/types";
import ProductDrawer from "../components/ProductDrawer";

export default function Layouts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const layout: LayoutType | undefined = layouts.find(
    (l) => l.id === id
  );

  const [selectedProducts, setSelectedProducts] = useState<
    Record<string, Product>
  >({});

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  if (!layout) return null;

  const handleSelect = (category: string, product: Product) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [category]: product,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: "rtl",
        background: "#f7f7f7",
      }}
    >


      {/* سایدبار محصولات */}
      <div
        style={{
          width: 360,
          margin: "40px",
          background: "#fff",
          borderRadius: 24,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ padding: 24 }}>
          <h2 style={{ margin: 0 }}>محصولات</h2>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 24,
          }}
        >
          {layout.products.map((group: ProductGroup) => {
            const selected =
              selectedProducts[group.category] || group.selected;

            return (
              <div key={group.category} style={{ marginBottom: 36 }}>
                <h4>{group.category}</h4>

                <div style={{ display: "flex", gap: 12 }}>
                  {[group.selected, ...group.alternatives].map(
                    (item: Product) => {
                      const isActive =
                        selected.id === item.id;

                      return (
                        <img
                          key={item.id}
                          src={item.image}
                          onClick={() =>
                            setActiveProduct(item)
                          }
                          style={{
                            width: 90,
                            borderRadius: 12,
                            cursor: "pointer",
                            border: isActive
                              ? "3px solid #111"
                              : "1px solid #ddd",
                            opacity: isActive ? 1 : 0.6,
                          }}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: 24 }}>
          <button
            onClick={() =>
              navigate(`/customize/${layout.id}`)
            }
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: 40,
              border: "none",
              background: "#111",
              color: "#fff",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            ورود به شخصی‌سازی
          </button>
        </div>
      </div>

      {/* تصویر سمت چپ */}
      <div
        style={{
          flex: 1,
          padding: 40,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          background: "#f7f7f7",
        }}
      >
        {/* Wrapper که اندازه‌اش برابر تصویر می‌شود */}
  <div
    style={{
      position: "relative",
      display: "inline-block",
      maxWidth: "100%",
      maxHeight: "100%",
    }}
    >

        <img
          src={layout.image}
          style={{
            maxWidth: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
            borderRadius: 24,


            
          }}
        />
        {/* AR Floating Button */}
        <button
          onClick={() => navigate(`/ar/${layout.id}`)}


          style={{
            position: "absolute",
            bottom: 20,
            right: 15,
            padding: "14px 22px",
            borderRadius: 20,
            border: "none",
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <span style={{ fontSize: 18 }}>🧊</span>
          مشاهده در فضای من
        </button>
    </div>

      </div>
      
      {activeProduct && (
        <ProductDrawer
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onSelect={(product) => {
            const group = layout.products.find((g) =>
              [g.selected, ...g.alternatives].some(
                (p) => p.id === product.id
              )
            );

            if (group) {
              handleSelect(group.category, product);
            }

            setActiveProduct(null);
          }}
        />
      )}

    </div>
  );
}
