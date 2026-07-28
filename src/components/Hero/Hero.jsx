import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Logo from "../Logo/Logo";
import "./hero.css";

const slideCount = 4;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="hero">
      <div className="hero__card">
        <div className="hero__content">
          <div className="hero__intro">
            <div className="hero__badge">
              <Logo className="hero__badge-logo" />
            </div>

            <h1 className="hero__title">
              Quản lý dễ dàng,
              <br />
              bán hàng hiệu quả
            </h1>
          </div>

          <p className="hero__description">
            Chào mừng bạn đến với Xứ sở thần tiên. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          <button type="button" className="btn btn--dark hero__cta">
            Đặt lịch tư vấn
            <ArrowRight size={32} />
          </button>
        </div>

        <span className="sr-only">
          Nhân viên Qtable đang sử dụng máy tính bảng
        </span>
      </div>

      <div className="hero__pagination">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Xem slide ${index + 1}`}
            aria-current={activeSlide === index}
            className={
              activeSlide === index
                ? "hero__dot hero__dot--active"
                : "hero__dot"
            }
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
