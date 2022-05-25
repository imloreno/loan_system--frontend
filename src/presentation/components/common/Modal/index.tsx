import Confirmation from "./Confirmation";
import DialogStyled from "./Dialog.styled";

type Props = {
  children?: React.ReactNode;
  type?: "confirmation" | "form";
  text?: string;
  onSuccess: (element?: any) => void;
  onClose: () => void;
  isOpen: boolean;
};

const Modal = (props: Props) => {
  const {
    children,
    type,
    text = "No subject",
    onSuccess,
    onClose,
    isOpen,
  } = props;

  //Handlers
  const handleClose = (event: any) =>
    event.target.classList.contains("close-modal") && onClose(); //Close modal

  return (
    <DialogStyled
      className={`${isOpen ? "" : "closed"} close-modal`}
      onMouseDown={handleClose}
      onTouchStart={handleClose}
    >
      <div className="content">
        {type === "form" && children}
        {type === "confirmation" && (
          <Confirmation {...{ text, onSuccess, onClose }} />
        )}
      </div>
    </DialogStyled>
  );
};

export default Modal;
