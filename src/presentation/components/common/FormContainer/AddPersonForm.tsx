import { useId, useState } from "react";
import Button from "../Button";
import FormContainer from "./FormContainer";
import { IPerson } from "interfaces/person";
import { fortmatToRedux } from "infraestructure/gateways/person";

type Props = {
  onSuccess: (form: IPerson) => void;
  onClose: () => void;
  data?: IPerson;
};

//InitialState
const initialState: IPerson = {
  id: Date.now(),
  nombres: "",
  apellidos: "",
  ci: ["", "nn"],
  fecha_nacimiento: "",
  estado: true,
};

const AddPersonForm = (props: Props) => {
  const { onSuccess = () => {}, onClose = () => {}, data } = props;
  const person = data ? fortmatToRedux(data) : initialState;
  const [form, setForm] = useState<IPerson>(person ?? initialState);
  const dateId = useId();

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
  const handlerSuccess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess(form);
    setForm(initialState);
    onClose();
  };
  const handlerClose = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <FormContainer>
      <input
        type="text"
        placeholder="Nombres"
        required
        value={form.nombres}
        onChange={handlerNames}
      />
      <input
        type="text"
        placeholder="Apellidos"
        required
        value={form.apellidos}
        onChange={handlerLastNames}
      />
      <div className="ci">
        <input
          type="text"
          placeholder="Carnet de identidad"
          required
          value={form.ci[0]}
          onChange={handlerCI}
        />
        <select
          name="departamento"
          id=""
          placeholder="Departamento"
          required
          value={form.ci[1]}
          onChange={handlerCIExpedition}
        >
          <option value="nn">Ninguno</option>
          <option value="sc">Santa Cruz</option>
          <option value="be">Beni</option>
          <option value="pd">Pando</option>
          <option value="tj">Tarija</option>
          <option value="ch">Chuquisaca</option>
          <option value="cb">Cochabamba</option>
          <option value="lp">La Paz</option>
          <option value="or">Oruro</option>
          <option value="pt">Potosí</option>
        </select>
      </div>
      <div className="date">
        <label htmlFor={"date" + dateId}>Fecha de nacimiento</label>
        <input
          type="date"
          id={"date" + dateId}
          value={form.fecha_nacimiento}
          onChange={handlerDate}
        />
      </div>
      <div className="actions">
        <Button type="success" onClick={handlerSuccess}>
          Agregar
        </Button>
        <Button type="error" onClick={handlerClose}>
          Cancelar
        </Button>
      </div>
    </FormContainer>
  );
};

export default AddPersonForm;
