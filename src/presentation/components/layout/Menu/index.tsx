import Icons from "presentation/components/common/Icons";
import StyledHeader from "./Header.styled";
import Link from "./Link.styled";
import Logo from "./Logo";
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
    name: "Lista de clientes",
    icon: "users",
  },
  {
    path: "/estadisticas",
    name: "Estatísticas de la empresa",
    icon: "char",
  },
];

const Menu = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          {ROUTES.map((route: Route, index: number) => (
            <li key={index}>
              <Link to={route.path}>
                <Icons type={route.icon} className="menu-icon" />
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Profile />
    </StyledHeader>
  );
};

export default Menu;
