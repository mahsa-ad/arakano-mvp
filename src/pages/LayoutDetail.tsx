import { useParams, useNavigate } from "react-router-dom";
import { layouts } from "../data/mockData";




export default function LayoutDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const layout = layouts.find((l) => l.id === id);
  if (!layout) return null;

  return (
    <div style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      {/* تصویر بزرگ چیدمان */}
      <img
        src={layout.image}
        alt=""
        style={{
          width: "100%",
          borderRadius: 24,
          marginBottom: 48,
        }}
      />

      {/* لیست محصولات */}
      <h3 style={{ marginBottom: 24 }}>محصولات این چیدمان</h3>

      {layout.products.map((group) => (
        <div key={group.category} style={{ marginBottom: 40 }}>
          <strong>{group.category}</strong>

          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            {/* محصول انتخاب‌شده */}
            <img
              src={group.selected.image}
              alt=""
              style={{
                width: 90,
                borderRadius: 10,
                border: "2px solid #111",
              }}
            />

            {/* گزینه‌های جایگزین */}
            {group.alternatives.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt=""
                style={{
                  width: 90,
                  borderRadius: 10,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* دکمه شخصی‌سازی */}
      <div style={{ textAlign: "center", marginTop: 64 }}>
        <button
          onClick={() => navigate(`/customize/${layout.id}`)}
          style={{
            padding: "14px 36px",
            borderRadius: 32,
            background: "#111",
            color: "#fff",
            border: "none",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          شخصی‌سازی این چیدمان
        </button>
      </div>
    </div>
  );
}
