import { Link } from "react-router-dom";
import { MenuProps } from "../../interfaces/HeaderInterface";

const Menu: React.FC<MenuProps> = ({ menuItem, index }) => {
  return (
    <li key={index}>
      <Link to={menuItem.slug ? menuItem.slug : ""}>
        {menuItem.menuLabel} {menuItem.icon}
      </Link>
    </li>
  );
};

export default Menu;
