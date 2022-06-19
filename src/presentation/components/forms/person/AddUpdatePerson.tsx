import { useState } from "react";
import Button from "presentation/components/common/Button";
import { ciDepartmentList } from "application/common/ciDepartmentList";
import {
  StyledButtonArea,
  StyledDateArea,
  StyledForm,
  StyledInputArea,
} from "../Forms.styled";

import { IPerson } from "interfaces/person";

type Props = {
  onSuccess: (form: IPerson) => void;
  onClose: () => void;
  data?: IPerson;
};

//InitialState
const initialState: IPerson = {
  nombres: "",
  apellidos: "",
  ci: ["", ""],
  fecha_nacimiento: "",
};

const AddUpdatePerson = (props: Props) => {
  const {
    onSuccess = () => {},
    onClose = () => {},
    data = initialState,
  } = props;
  const [form, setForm] = useState<IPerson>(data);

  //Handlers
  const handlerNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, nombres: e.target.value });
  };
  const handlerLastNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, apellidos: e.target.value });
  };
  const handlerCI = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, ci: [e.target.value, form.ci[1]] });
  };
  const handlerCIExpedition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, ci: [form.ci[0], e.target.value] });
  };
  const handlerDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, fecha_nacimiento: e.target.value });
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
        value={form.nombres}
        placeholder="Nombres"
        onChange={handlerNames}
      />
      <input
        type="text"
        value={form.apellidos}
        placeholder="Apellidos"
        onChange={handlerLastNames}
      />
      <StyledInputArea>
        <input
          type="text"
          placeholder="Carnet de identidad"
          onChange={handlerCI}
          value={form.ci[0]}
        />
        <select onChange={handlerCIExpedition} value={form.ci[1]}>
          {ciDepartmentList.map((ciItem) => (
            <option key={ciItem.value} value={ciItem.value}>
              {ciItem.label}
            </option>
          ))}
        </select>
      </StyledInputArea>
      <StyledDateArea>
        <label htmlFor={"date"}>Fecha de nacimiento</label>
        <input
          type="date"
          id={"date"}
          value={form.fecha_nacimiento}
          onChange={handlerDate}
        />
      </StyledDateArea>
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

export default AddUpdatePerson;
