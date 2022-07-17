import Icons from "../Icons";
import Confirmation from "./Confirmation";
import DialogStyled from "./Dialog.styled";

type Props = {
  children?: React.ReactNode;
  type?: "confirmation" | "form" | "observations";
  text?: string;
  onSuccess: (element?: any) => void;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const { children, type, text = "No subject", onSuccess, onClose } = props;

  return (
    <DialogStyled>
      <div className="content">
        <div className="close-button" onClick={onClose}>
          <Icons type="close" className="close-icon" />
        </div>
        <p className="modal-title">{text}</p>
        <hr className="modal-separator" />
        {type === "form" && children}
        {type === "confirmation" && (
          <Confirmation {...{ onSuccess, onClose }} />
        )}
        {type === "observations" && children}
      </div>
    </DialogStyled>
  );
};

export default Modal;
