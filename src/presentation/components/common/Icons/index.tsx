import { BiHome, BiLineChart, BiEditAlt } from "react-icons/bi";
import { FiUsers, FiTrash2 } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { AiOutlineFileSearch, AiOutlineUserAdd } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";

interface Icon {
  className?: string;
}
interface IconProps extends Icon {
  type: string;
}

//Icons
const Home = (props: Icon) => <BiHome className={props.className} />;
const Users = (props: Icon) => <FiUsers className={props.className} />;
const AddUser = (props: Icon) => (
  <AiOutlineUserAdd className={props.className} />
);
const Char = (props: Icon) => <BiLineChart className={props.className} />;
const Edit = (props: Icon) => <BiEditAlt className={props.className} />;
const Details = (props: Icon) => (
  <AiOutlineFileSearch className={props.className} />
);
const Delete = (props: Icon) => <FiTrash2 className={props.className} />;
const Menu = (props: Icon) => <HiMenu className={props.className} />;
const Loan = (props: Icon) => <FaHandHoldingUsd className={props.className} />;

//Default function
const Icons = (props: IconProps) => {
  switch (props.type) {
    case "home":
      return <Home className={props.className ?? ""} />;
    case "users":
      return <Users className={props.className ?? ""} />;
    case "adduser":
      return <AddUser className={props.className ?? ""} />;
    case "char":
      return <Char className={props.className ?? ""} />;
    case "menu":
      return <Menu className={props.className ?? ""} />;
    case "edit":
      return <Edit className={props.className ?? ""} />;
    case "details":
      return <Details className={props.className ?? ""} />;
    case "delete":
      return <Delete className={props.className ?? ""} />;
    case "loan":
      return <Loan className={props.className ?? ""} />;
    default:
      return <Home />;
  }
};

export default Icons;
