import Button from "../../Button";
import { StyledButtonArea, StyledForm, StyledInputArea } from "../Forms.styled";

type Props = {};

const AddUpdateLoan = (props: Props) => {
  return (
    <StyledForm>
      <StyledInputArea>
        <input
          type="text"
          placeholder="Préstamo (bs)"
          pattern="^\d*(\.\d{0,2})?$"
        />

        <input type="text" placeholder="Interés %" style={{ width: "50%" }} />

        <input type="text" placeholder="Total (bs)" />
      </StyledInputArea>

      <StyledInputArea>
        <select onChange={() => {}} value={"0"}>
          <option value="diario" hidden>
            Frecuencia de pago
          </option>
          <option value="diario">Diario</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
          <option value="anual">Anual</option>
        </select>
        <p>
          Número de cuotas: <b>4</b>
        </p>
      </StyledInputArea>

      <StyledInputArea>
        <div className="input-labels-content">
          <label>Fecha de inicio</label>
          <input type="date" />
        </div>
        <div className="input-labels-content">
          <label>Plazo final</label>
          <input type="date" />
        </div>
      </StyledInputArea>

      <h3>Garantía</h3>
      <input type="text" placeholder="Garantía" />
      <input type="text" placeholder="Valor estimado (bs)" />
      <textarea placeholder="Descripcion"></textarea>

      <StyledButtonArea>
        <Button type="success" onClick={() => {}}>
          Aceptar
        </Button>
        <Button type="error" onClick={() => {}}>
          Cancelar
        </Button>
      </StyledButtonArea>
    </StyledForm>
  );
};

export default AddUpdateLoan;
