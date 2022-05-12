import { BiHome, BiLineChart } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

interface Icon {
  className?: string;
}
interface IconProps extends Icon {
  type: string;
}

//Icons
const Home = (props: Icon) => <BiHome className={props.className} />;
const Users = (props: Icon) => <FiUsers className={props.className} />;
const Char = (props: Icon) => <BiLineChart className={props.className} />;

//Default function
const Icons = (props: IconProps) => {
  switch (props.type) {
    case "home":
      return <Home className={props.className ?? ""} />;
    case "users":
      return <Users className={props.className ?? ""} />;
    case "char":
      return <Char className={props.className ?? ""} />;
    default:
      return <Home />;
  }
};

export default Icons;
