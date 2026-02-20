import { useState } from "react";
import "./SpaceTabs.css"


type Props = {
  value: string;
  onChange: (id: string) => void;
  items: { id: string; label: string }[];
};

export default function SpaceTabs({ value, onChange, items }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onChange(item.id)}
          className="space-card">
            <img src="" alt="" />
          {item.label}
        </div>
      ))}
    </div>
  );
}
