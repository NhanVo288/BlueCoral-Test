import { useState } from "react";
import { X, ChevronDown, ArrowRight } from "lucide-react";

import Logo from "../Logo/Logo";
import menu from "../../data/menu";

export default function MobileMenu({ open, setOpen }) {
  const [expanded, setExpanded] = useState(null);

  if (!open) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__glow" />

      <div className="mobile-menu__header">
        <a href="/" className="navbar__logo" aria-label="Qtable">
          <Logo />
        </a>

        <button
          type="button"
          className="mobile-menu__close"
          onClick={() => setOpen(false)}
          aria-label="Đóng menu"
        >
          <X size={16} />
        </button>
      </div>

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
