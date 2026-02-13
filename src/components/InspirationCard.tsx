import { useNavigate } from "react-router-dom";

type Props = {
  image: string;
  layoutId: string;
};

export default function InspirationCard({ image, layoutId }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/layout/${layoutId}`)}
      style={{
        cursor: "pointer",
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
