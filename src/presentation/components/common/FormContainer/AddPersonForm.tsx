import { useId, useState } from "react";
import Button from "../Button";
import FormContainer from "./FormContainer";

type Props = {};

interface IForm {
  id: number;
  nombres: string;
  apellidos: string;
  ci: [number, string];
  fecha_nacimiento: string;
  estado: boolean;
}

//InitialState
const initialState: IForm = {
  id: Date.now(),
  nombres: "",
  apellidos: "",
  ci: [0, "nn"],
  fecha_nacimiento: "",
  estado: true,
};

const AddPersonForm = (props: Props) => {
  const [form, setForm] = useState<IForm>(initialState);
  const dateId = useId();

  //Handlers
  const handlerNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, nombres: e.target.value });
  };
  const handlerLastNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, apellidos: e.target.value });
  };
  const handlerCI = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, ci: [parseInt(e.target.value), form.ci[1]] });
  };
  const handlerCIExpedition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, ci: [form.ci[0], e.target.value] });
  };
  const handlerDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, fecha_nacimiento: e.target.value });
  };

  return (
    <FormContainer>
      <input type="text" placeholder="Nombres" required />
      <input type="text" placeholder="Apellidos" required />
      <div className="ci">
        <input
          type="number"
          min="0"
          placeholder="Carnet de identidad"
          required
        />
        <select name="departamento" id="" placeholder="Departamento" required>
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
        <input type="date" id={"date" + dateId} />
      </div>
      <div className="actions">
        <Button type="success">Agregar</Button>
        <Button type="error">Cancelar</Button>
      </div>
    </FormContainer>
  );
};

export default AddPersonForm;
