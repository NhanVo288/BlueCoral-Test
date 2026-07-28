import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

import menu from "../../data/menu";

export default function MobileMenu({ open }) {
  const [expanded, setExpanded] = useState(null);

  if (!open) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__glow" />

      <nav className="mobile-menu__nav">
        {menu.map((item) => (
          <div key={item.title} className="mobile-menu__item">
            {item.children ? (
              <>
                <button
                  type="button"
                  className="mobile-menu__trigger"
                  onClick={() =>
                    setExpanded(expanded === item.title ? null : item.title)
                  }
                  aria-expanded={expanded === item.title}
                >
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={
                      expanded === item.title
                        ? "mobile-menu__chevron mobile-menu__chevron--open"
                        : "mobile-menu__chevron"
                    }
                  />
                </button>

                {expanded === item.title && (
                  <div className="mobile-menu__submenu">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href="#"
                        className="mobile-menu__sublink"
                      >
                        {child.label}
                        {child.featured && <ArrowRight size={20} />}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href="#" className="mobile-menu__link">
                {item.title}
              </a>
            )}
          </div>
        ))}
      </nav>

      <div className="mobile-menu__actions">
        <button type="button" className="btn btn--outline btn--block">
          Đăng nhập
        </button>

        <button type="button" className="btn btn--primary btn--block">
          Sử dụng miễn phí
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
