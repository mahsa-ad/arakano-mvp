import type { Product } from "../types/types";



type Props = {
  product: Product;
  onClose: () => void;
  onSelect: (product: Product) => void;
};

export default function ProductDrawer({
  product,
  onClose,
  onSelect,
}: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.2)",
          zIndex: 999,
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: 340,
          background: "#fff",
          boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
          zIndex: 1000,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          direction: "rtl",
          animation: "slideIn 0.3s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            alignSelf: "flex-start",
            marginBottom: 16,
          }}
        >
          ✕
        </button>

        {/* Image */}
        <img 
          src={product.image}
          style={{
            width: "85%",
            borderRadius: 16,
            marginBottom: 5,
            
          }}
        />

        <h2>{product.name}</h2>

        {/* Price */}
        <div
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          {product.price.toLocaleString()} تومان
        </div>

        {/* Rating */}
        <div style={{ marginBottom: 16 }}>
          ⭐⭐⭐⭐☆ <span style={{ opacity: 0.6 }}>(4.2)</span>
        </div>

        <div><strong>شرکت:</strong> {product.brand}</div>
        <div><strong>سبک:</strong> {product.style}</div>
        <div><strong>جنس:</strong> {product.material}</div>
        <div><strong>رنگ:</strong> {product.color}</div>
        <div><strong>ابعاد:</strong> {product.dimensions}</div>

        <div style={{ marginTop: 16, opacity: 0.8 }}>
          {product.description}
        </div>

        <button
          onClick={() => onSelect(product)}
          style={{
            marginTop: "auto",
            padding: "16px",
            borderRadius: 40,
            border: "none",
            background: "#111",
            color: "#fff",
            fontSize: 16,
            cursor: "pointer",
            margin: 32,
          }}
        >
          انتخاب این محصول
        </button>
      </div>
    </>
  );
}
