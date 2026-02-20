import { useState } from "react";
import "./SpaceTabs.css"


type Props = {
  value: string;
  onChange: (id: string) => void;
  items: { id: string; label: string; image: string }[];
};

export default function SpaceTabs({ value, onChange, items }: Props) {
  return (
    <div className="spaceTabs-container">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onChange(item.id)}
          className="space-card">
            <img src={item.image} alt={item.label} />
            <span>{item.label}</span>
          
        </div>
      ))}
    </div>
  );
}
