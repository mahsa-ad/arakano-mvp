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
      {items.map((space) => (
        <div
          key={space.id}
          onClick={() => onChange(space.id)}
          className={`space-card ${value == space.id ? "active" : ""}`}>
            <img className="space-card-img" src={space.image} alt={space.label} />
            <span className="space-card-span">{space.label}</span>
          
        </div>
      ))}
    </div>
  );
}
