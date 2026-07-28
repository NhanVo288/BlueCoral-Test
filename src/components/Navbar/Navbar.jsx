import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "../Logo/Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <a href="/bluecoral-test/" className="navbar__logo" aria-label="Qtable">
          <Logo />
        </a>

        <DesktopMenu />

        <div className="navbar__actions">
          <button type="button" className="btn btn--outline">
            Đăng nhập
          </button>

          <button type="button" className="btn btn--primary">
            Sử dụng miễn phí
            <ArrowRight size={24} />
          </button>

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <MobileMenu open={open} />
    </>
  );
}
