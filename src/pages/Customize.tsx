import { useState } from "react";

export default function Customize() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <h2 style={{ marginBottom: 8 }}>شخصی‌سازی چیدمان</h2>
      <p style={{ color: "#666", marginBottom: 32 }}>
        می‌تونی رنگ، متریال و جزئیات هر آیتم رو تغییر بدی
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 32,
        }}
      >
        {/* 3D Preview (placeholder MVP) */}
        <div
          style={{
            height: 420,
            borderRadius: 16,
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
          }}
        >
          3D Preview (Three.js / model-viewer)
        </div>

        {/* Control Panel */}
        <div>
          <h4>انتخاب آیتم</h4>

          {["مبل", "فرش", "میز"].map((item) => (
            <div
              key={item}
              onClick={() => setSelectedItem(item)}
              style={{
                padding: "12px 16px",
                marginBottom: 12,
                borderRadius: 12,
                cursor: "pointer",
                background:
                  selectedItem === item ? "#111" : "#eee",
                color:
                  selectedItem === item ? "#fff" : "#000",
                transition: "all 0.25s ease",
              }}
            >
              {item}
            </div>
          ))}

          {selectedItem && (
            <div style={{ marginTop: 24 }}>
              <h5>تنظیمات {selectedItem}</h5>
              <p style={{ fontSize: 14, color: "#666" }}>
                رنگ، متریال و ابعاد
              </p>

              {/* MVP Controls */}
              <button style={softButtonStyle}>
                تغییر رنگ
              </button>
              <button style={softButtonStyle}>
                تغییر متریال
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const softButtonStyle = {
  width: "100%",
  padding: "12px 16px",
  marginTop: 12,
  borderRadius: 12,
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};
