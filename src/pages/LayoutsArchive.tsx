import { useSearchParams, useNavigate } from "react-router-dom";
import { layouts } from "../data/mockData";

export default function LayoutsArchive() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const space = searchParams.get("space");
  const style = searchParams.get("style");

  const filteredLayouts = layouts.filter((l) => {
    const spaceMatch = space ? l.spaceId === space : true;
    const styleMatch =
      style && style !== "all" ? l.styleId === style : true;

    return spaceMatch && styleMatch;
  });

  return (
    <div style={{ padding: 40, maxWidth: 1200, margin: "0 auto" }}>
      <h2>همه چیدمان‌ها</h2>

      <div
        style={{
          columnCount: 3,
          columnGap: 24,
          marginTop: 40,
        }}
      >
        {filteredLayouts.map((layout) => (
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
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
