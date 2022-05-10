import StyledHeader from "./Header.styled";
import Link from "./Link.styled";
import Logo from "./Logo";
import Profile from "./Profile";

interface Route {
  path: string;
  name: string;
}

const ROUTES = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/clientes",
    name: "Lista de clientes",
  },
  {
    path: "/estadisticas",
    name: "Estatísticas de la empresa",
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
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Profile />
    </StyledHeader>
  );
};

export default Menu;
