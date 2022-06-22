import Icons from "presentation/components/common/Icons";
import { useState } from "react";
import StyledHeader from "./Header.styled";
import Link from "./Link.styled";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import Profile from "./Profile";

interface Route {
  path: string;
  name: string;
  icon: string;
}

const ROUTES = [
  {
    path: "/",
    name: "Home",
    icon: "home",
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: "users",
  },
  {
    path: "/prestamos",
    name: "Préstamos",
    icon: "users",
  },
  {
    path: "/estadisticas",
    name: "Estatísticas",
    icon: "char",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((isOpen) => !isOpen);

  return (
    <StyledHeader className={isOpen ? "open" : ""}>
      <div className="logo">
        <Logo />
      </div>
      <MenuIcon onClick={handleOpen} />
      <nav className={isOpen ? "open" : ""}>
        <ul>
          {ROUTES.map((route: Route, index: number) => (
            <li key={index} onClick={handleOpen}>
              <Link to={route.path}>
                <Icons type={route.icon} className="menu-icon" />
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Profile className="profile-container" />
    </StyledHeader>
  );
};

export default Menu;
