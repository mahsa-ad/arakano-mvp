import InspirationCard from "./InspirationCard";


type Props = {
  images: { id: string; image: string }[];
};


export default function InspirationGrid({ images }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 24,
        marginTop: 32,
      }}
    >
      {images.map((item) => (
        <InspirationCard
          key={item.id}
          image={item.image}
          layoutId={item.id}
        />
      ))}
    </div>
  );
}
