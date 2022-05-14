import Icons from "presentation/components/common/Icons";

interface IProps {
  onClick: () => any;
}

const MenuIcon = (props: IProps) => {
  const { onClick } = props;
  return (
    <div className="burguer-menu" onClick={onClick}>
      <Icons type="menu" />
    </div>
  );
};

export default MenuIcon;
