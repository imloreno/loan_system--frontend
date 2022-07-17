import { BiHome, BiLineChart, BiEditAlt } from "react-icons/bi";
import { FiUsers, FiTrash2 } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import {
  AiOutlineFileSearch,
  AiOutlineUserAdd,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { IoClose } from "react-icons/io5";

interface IconProps {
  className?: string;
  type: string;
}

//Default function
const Icons = (props: IconProps) => {
  const { type, className = "" } = props;
  switch (type) {
    case "home":
      return <BiHome className={className} />;
    case "users":
      return <FiUsers className={className} />;
    case "adduser":
      return <AiOutlineUserAdd className={className} />;
    case "char":
      return <BiLineChart className={className} />;
    case "menu":
      return <HiMenu className={className} />;
    case "edit":
      return <BiEditAlt className={className} />;
    case "details":
      return <AiOutlineFileSearch className={className} />;
    case "delete":
      return <FiTrash2 className={className} />;
    case "loan":
      return <FaHandHoldingUsd className={className} />;
    case "add":
      return <AiOutlinePlus className={className} />;
    case "less":
      return <GoDash className={className} />;
    case "close":
      return <IoClose className={className} />;
    default:
      return <BiHome className={className} />;
  }
};

export default Icons;
