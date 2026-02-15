import { useParams, useNavigate } from "react-router-dom";
import { layouts } from "../data/mockData";
import QRCode from "react-qr-code";
import React from "react";

export default function ARPreview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const layout = layouts.find((l) => l.id === id);
  if (!layout) return null;

  const model = layout.experience?.model;
  const glbSrc = model?.glb;
  const usdzSrc = model?.usdz;
  const qrEnabled = layout.experience?.qr?.enabled;
  const qrSize = layout.experience?.qr?.size || 220;

  // const qrValue = `${window.location.origin}/ar/${layout.id}`;
  const qrValue = window.location.href;



  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: "rtl",
        background: "#f5f5f5",
      }}
    >
      {/* 3D VIEW */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
        }}
      >

        {model && React.createElement("model-viewer", {
          src: glbSrc,
          "ios-src": usdzSrc,
          ar: true,
          "ar-modes": "scene-viewer quick-look webxr",
          "ar-placement": "floor",
          "camera-controls": true,
          "auto-rotate": true,
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "24px",
            background: "#fff",
          }
        })}

      </div>

      {/* QR SECTION */}
      {qrEnabled && (
        <div
          style={{
            width: 420,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            boxShadow: "-10px 0 40px rgba(0,0,0,0.05)",
            gap: 24,
          }}
        >
          <h2 style={{ margin: 0 }}>
            مشاهده چیدمان در فضای شما
          </h2>

          <QRCode value={qrValue} size={qrSize} />

          <p
            style={{
              opacity: 0.6,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            با موبایل QR را اسکن کنید  
            و چیدمان را در فضای واقعی ببینید
          </p>

          {/* دکمه برگشت اینجا آمد */}
          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: 10,
              padding: "10px 24px",
              borderRadius: 30,
              border: "none",
              background: "#111",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            بازگشت به صفحه قبل
          </button>
        </div>
      )}
    </div>
  );
}
