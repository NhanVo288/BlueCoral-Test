import { ChevronDown, ArrowRight } from "lucide-react";

export default function Dropdown({ item }) {
  return (
    <div className="nav-dropdown">
      <button className="nav-dropdown__trigger" type="button">
        {item.title}
        <ChevronDown size={16} />
      </button>

      <div className="nav-dropdown__panel">
        {item.children.map((child) => (
          <a
            key={child.label}
            href="#"
            className={
              child.featured
                ? "nav-dropdown__link nav-dropdown__link--featured"
                : "nav-dropdown__link"
            }
          >
            {child.label}
            {child.featured && (
              <ArrowRight size={24} className="nav-dropdown__arrow" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
