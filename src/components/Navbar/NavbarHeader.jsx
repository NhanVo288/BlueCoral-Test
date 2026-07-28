import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "../Logo/Logo";
import DesktopMenu from "./DesktopMenu";

export default function NavbarHeader({
  open,
  onToggle,
  showDesktopMenu = true,
  showActions = true,
}) {
  return (
    <>
      <a href="/" className="navbar__logo" aria-label="Qtable">
        <Logo />
      </a>

      {showDesktopMenu && <DesktopMenu />}

      <div className="navbar__actions">
        {showActions && (
          <>
            <button type="button" className="btn btn--outline">
              Đăng nhập
            </button>

            <button type="button" className="btn btn--primary">
              Sử dụng miễn phí
              <ArrowRight size={24} />
            </button>
          </>
        )}

        <button
          type="button"
          className="navbar__hamburger"
          onClick={onToggle}
          aria-label={open ? "Đóng menu" : "Mở menu"}
        >
          {open ? <X size={16} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
}
