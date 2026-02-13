import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { spaces, styles, layouts } from "../data/mockData";
import SpaceTabs from "../components/SpaceTabs";
import StyleTabs from "../components/StyleTabs";

export default function Home() {
  const navigate = useNavigate();

  const [space, setSpace] = useState("kitchen");
  const [style, setStyle] = useState("all");

  // فیلتر بر اساس space و style
  const filteredLayouts = layouts.filter((l) => {
    const spaceMatch = l.spaceId === space;
    const styleMatch = style === "all" ? true : l.styleId === style;
    return spaceMatch && styleMatch;
  });

  const MAX_PREVIEW = 12;
  const visibleLayouts = filteredLayouts.slice(0, MAX_PREVIEW);
  const hasMore = filteredLayouts.length > MAX_PREVIEW;

  return (
    <div style={{ padding: 40, maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
      <h2>فضاها</h2>
      <SpaceTabs items={spaces} value={space} onChange={setSpace} />

      <h3 style={{ marginTop: 40 }}>سبک ها</h3>
      <StyleTabs items={styles} value={style} onChange={setStyle} />

      {/* Masonry Grid */}
      <div
        style={{
          columnCount: 3,
          columnGap: "24px",
          marginTop: 40,
        }}
      >
        {visibleLayouts.map((layout) => (
          <div
            key={layout.id}
            onClick={() => navigate(`/layout/${layout.id}`)}
            style={{
              breakInside: "avoid",
              marginBottom: 24,
              cursor: "pointer",
              borderRadius: 20,
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={layout.image}
              style={{
                width: "100%",
                borderRadius: 20,
                display: "block",
              }}
            />

          </div>
        ))}

        {/* مشاهده بیشتر */}
        {hasMore && (
          <div
            onClick={() =>
              navigate(`/layouts?space=${space}&style=${style}`)
            }
            style={{
              breakInside: "avoid",
              padding: 40,
              textAlign: "center",
              borderRadius: 20,
              background: "#f5f5f5",
              cursor: "pointer",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            مشاهده بیشتر →
          </div>
        )}
      </div>
    </div>
  );
}
