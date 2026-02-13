type Props = {
  value: string;
  onChange: (id: string) => void;
  items: { id: string; label: string }[];
};

export default function StyleTabs({ value, onChange, items }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24 }}>
      {items.map((item) => (
        <span
          key={item.id}
          onClick={() => onChange(item.id)}
          style={{
            cursor: "pointer",
            opacity: value === item.id ? 1 : 0.4,
            fontWeight: value === item.id ? 600 : 400,
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
