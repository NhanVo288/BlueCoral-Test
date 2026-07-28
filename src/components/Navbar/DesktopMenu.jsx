import Dropdown from "./Dropdown";
import menu from "../../data/menu";

export default function DesktopMenu() {
  return (
    <ul className="navbar__menu">
      {menu.map((item) => (
        <li key={item.title}>
          {item.children ? (
            <Dropdown item={item} />
          ) : (
            <a href="#" className="navbar__link">
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
