type Props = {
  value: string;
  onChange: (id: string) => void;
  items: { id: string; label: string }[];
};

export default function SpaceTabs({ value, onChange, items }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          style={{
            padding: "8px 16px",
            borderRadius: 20,
            border: "1px solid #ccc",
            background: value === item.id ? "#000" : "#fff",
            color: value === item.id ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
