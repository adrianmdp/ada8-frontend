import { Link } from "react-router-dom";
import { menuItems } from "./items";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navbar };
