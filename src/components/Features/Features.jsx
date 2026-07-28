import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import anuong from "../../assets/anuong.png";
import banle from "../../assets/banle.png";
import dichvu from "../../assets/dichvu.png";
import "./features.css";

const tabs = [
  { id: "food", label: "Ăn uống", icon: anuong },
  { id: "retail", label: "Bán lẻ", icon: banle, badge: "NEW" },
  { id: "service", label: "Dịch vụ", icon: dichvu, badge: "NEW" },
];

const foodCategories = [
  {
    title: "Quán cà phê",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    title: "Quán ăn / nhà hàng",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    title: "Quán bar / lounge / pub",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    title: "Quán ăn di động",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    title: "Tiệm trà sữa",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
  {
    title: "Tiệm bánh",
    description:
      "Qtable POS giúp order nhanh, chọn size/topping, in phiếu bar và quản lý mang đi/ngồi lại hiệu quả.",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeCategory, setActiveCategory] = useState(0);

  const trackRef = useRef(null);

  const showCategories = activeTab === "food";
  const activeTabData = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  const setCategoryFromClientY = (clientY) => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const ratio = (clientY - trackRect.top) / trackRect.height;
    const clamped = Math.min(Math.max(ratio, 0), 0.999);

    setActiveCategory(Math.floor(clamped * foodCategories.length));
  };

  const handleTrackPointerMove = (event) => setCategoryFromClientY(event.clientY);

  const handleTrackPointerUp = () => {
    window.removeEventListener("pointermove", handleTrackPointerMove);
    window.removeEventListener("pointerup", handleTrackPointerUp);
  };

  const handleTrackPointerDown = (event) => {
    setCategoryFromClientY(event.clientY);
    window.addEventListener("pointermove", handleTrackPointerMove);
    window.addEventListener("pointerup", handleTrackPointerUp);
  };

  return (
    <section className="features">
      <div className="features__intro">
        <div className="features__heading">
          <span className="features__eyebrow">Long subtitle</span>
          <h2 className="features__title">Everything You Need</h2>
        </div>

        <p className="features__description">
          Improve speed of service, boost kitchen efficiency, and drive repeat
          business with a restaurant management solution that offers
          everything you need to maximize profits and offer an unparalleled
          guest experience – all in one place.
        </p>
      </div>

      <div className="features__panel">
        <span className="features__panel-glow features__panel-glow--top" aria-hidden="true" />
        <span className="features__panel-glow features__panel-glow--bottom" aria-hidden="true" />

        <div className="features__tabs-row">
          <span
            className="features__tabs-notch features__tabs-notch--left"
            aria-hidden="true"
          />

          <div className="features__tabs" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={
                    isActive
                      ? "features__tab features__tab--active"
                      : "features__tab"
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  <img src={tab.icon} alt="" className="features__tab-icon" />
                  {tab.label}
                  {tab.badge && (
                    <span className="features__tab-badge">{tab.badge}</span>
                  )}
                </button>
              );
            })}
          </div>

          <span
            className="features__tabs-notch features__tabs-notch--right"
            aria-hidden="true"
          />
        </div>

        <div className="features__mobile-tab-row">
          <span
            className="features__tabs-notch features__tabs-notch--left features__tabs-notch--sm"
            aria-hidden="true"
          />

          <div className="features__mobile-tab-white">
          <div className="features__mobile-tab-bar">
            <ChevronDown size={16} className="features__mobile-tab-arrow" />

            <span className="features__mobile-tab-label">
              <img
                src={activeTabData.icon}
                alt=""
                className="features__tab-icon"
              />
              {activeTabData.label}
            </span>

            {activeTabData.badge && (
              <span className="features__tab-badge features__tab-badge--sm">
                {activeTabData.badge}
              </span>
            )}

            <ChevronDown size={16} className="features__mobile-tab-arrow" />

            <select
              className="features__mobile-tab-select"
              value={activeTab}
              onChange={(event) => setActiveTab(event.target.value)}
              aria-label="Loại hình kinh doanh"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
          </div>

          <span
            className="features__tabs-notch features__tabs-notch--right features__tabs-notch--sm"
            aria-hidden="true"
          />
        </div>

        <div className="features__body">
          <div className="features__mobile-selects">
            {showCategories && (
              <label className="features__select-wrap">
                <select
                  className="features__select"
                  value={activeCategory}
                  onChange={(event) =>
                    setActiveCategory(Number(event.target.value))
                  }
                >
                  {foodCategories.map((category, index) => (
                    <option key={category.title} value={index}>
                      {category.title}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </label>
            )}
          </div>

          {showCategories ? (
            <div className="features__sidebar">
              <div
                className="features__scrollbar"
                ref={trackRef}
                onPointerDown={handleTrackPointerDown}
              >
                <div
                  className="features__scrollbar-thumb"
                  style={{
                    top: `${(activeCategory / foodCategories.length) * 100}%`,
                    height: `${(1 / foodCategories.length) * 100}%`,
                  }}
                />
              </div>

              <ul className="features__list">
                {foodCategories.map((category, index) => {
                  const isActive = index === activeCategory;

                  return (
                    <li key={category.title} className="features__list-item">
                      <button
                        type="button"
                        className={
                          isActive
                            ? "features__list-trigger features__list-trigger--active"
                            : "features__list-trigger"
                        }
                        onClick={() => setActiveCategory(index)}
                      >
                        {category.title}
                      </button>

                      {isActive && (
                        <p className="features__list-description">
                          {category.description}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="features__sidebar features__sidebar--empty">
              <h3 className="features__empty-title">Sắp ra mắt</h3>
              <p className="features__empty-description">
                Tính năng dành cho {activeTabData.label.toLowerCase()} đang
                được hoàn thiện, hãy quay lại sau nhé.
              </p>
            </div>
          )}

          <div className="features__preview" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
