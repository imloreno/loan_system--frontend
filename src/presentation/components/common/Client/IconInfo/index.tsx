import StyledIconInfo from "./IconInfo.styled";

type Props = {
  img: string;
  title: string;
  description: string;
};

const IconInfo = (props: Props) => {
  const { img, title, description } = props;
  return (
    <StyledIconInfo>
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledIconInfo>
  );
};

export default IconInfo;
