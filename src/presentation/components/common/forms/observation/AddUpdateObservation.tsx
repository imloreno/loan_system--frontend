import { useState } from "react";
import Button from "presentation/components/common/Button";
import { StyledButtonArea, StyledForm } from "../Forms.styled";

import { IObservation } from "interfaces/observation";

type Props = {
  onSuccess: (form: IObservation) => void;
  onClose: () => void;
  data?: IObservation;
  id_person: number;
};

//InitialState
const initialState: IObservation = {
  id: 0,
  observation: "",
  observation_type: "client",
  status: true,
  id_person: 0,
};

const AddUpdateObservation = (props: Props) => {
  const {
    onSuccess = () => {},
    onClose = () => {},
    data = initialState,
    id_person = 0,
  } = props;
  const [form, setForm] = useState<IObservation>({ ...data, id_person });

  //Handlers
  const handleChangeObservation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, observation: e.target.value });
  };
  const handleChangeObservationType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({ ...form, observation_type: e.target.value });
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess(form);
    onClose();
  };
  const handlerClose = () => onClose();

  return (
    <StyledForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <input
        type="text"
        value={form.observation}
        placeholder="Observación"
        onChange={handleChangeObservation}
      />
      <select
        onChange={handleChangeObservationType}
        value={form.observation_type}
      >
        <option value="cliente">Cliente</option>
        <option value="empleado">Empleado</option>
      </select>
      <StyledButtonArea>
        <Button type="success" onClick={handlerSubmit}>
          Aceptar
        </Button>
        <Button type="error" onClick={handlerClose}>
          Cancelar
        </Button>
      </StyledButtonArea>
    </StyledForm>
  );
};

export default AddUpdateObservation;
