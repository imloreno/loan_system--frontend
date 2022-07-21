import { getformatDate } from "infraestructure/gateways/utils/changeDate";
import { IGuarantee } from "interfaces/guarantee";
import { ILoan } from "interfaces/loan";
import moment from "moment";
import { useEffect, useState } from "react";
import Button from "../../Button";
import { StyledButtonArea, StyledForm, StyledInputArea } from "../Forms.styled";

interface IInitialState extends ILoan {
  guarantee: IGuarantee;
}
interface IProps {
  onSuccess: () => void;
  onClose: () => void;
  loan?: ILoan;
  guarantee?: IGuarantee;
}

const initialState: IInitialState = {
  id_loan: 0,
  total: 0.0,
  without_interest: 0.0,
  interest: 0,
  amount_paid: 0.0,
  start_date: moment().format("YYYY-MM-DD"),
  end_date: moment().format("YYYY-MM-DD"),
  frecuency: "diario",
  installments: 0,
  pending: true,
  id_employee: 0,
  id_client: 0,
  guarantee: {
    id_guarantee: 0,
    name: "",
    description: "",
    estimated_value: 0.0,
    id_loan: 0,
  },
};

const AddUpdateLoan = (props: IProps) => {
  const [form, setForm] = useState<IInitialState>(
    props.loan && props.guarantee
      ? { ...props.loan, guarantee: props.guarantee }
      : initialState
  );
  const [amountPerInstallment, setAmountPerInstallment] = useState<number>(0.0); //TODO: calculate this
  console.log(form);

  //Calculate total
  useEffect(() => {
    // Calculate total
    const without_interest = Number(form.without_interest);
    const interest = Number(form.interest) / 100;
    setForm({
      ...form,
      total: (without_interest + interest * without_interest).toFixed(2),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.interest, form.without_interest]);

  //Calculate date
  useEffect(() => {
    // Calculate date
    const startDate = moment(form.start_date);
    const endDate = moment(form.end_date);
    if (startDate > endDate) return;
    const diff = endDate.diff(startDate, getformatDate(form.frecuency));
    setForm({
      ...form,
      installments: diff <= 0 ? 1 : diff,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.end_date, form.start_date, form.frecuency]);

  useEffect(() => {
    const total = Number(form.total);
    const installments = Number(form.installments);
    const res = total / installments || 0.0;

    setAmountPerInstallment(Number(res.toFixed(2)));
  }, [form.total, form.interest, form.frecuency, form.installments]);

  //Handlers
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    //If the values are undefined
    const value = e.target.value === "" ? 0 : Number(e.target.value);
    setForm({ ...form, [e.target.name]: value });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeGuarantee = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      guarantee: { ...form.guarantee, [e.target.name]: e.target.value },
    });
  };

  return (
    <StyledForm>
      <StyledInputArea>
        <div className="input-labels-content">
          <label>Monto a prestar (bs)</label>
          <input
            type="number"
            name="without_interest"
            placeholder="Préstamo (bs)"
            required
            value={form.without_interest === 0 ? "" : form.without_interest}
            onChange={handleChangeNumber}
          />
        </div>

        <div className="input-labels-content">
          <label>Interés %</label>
          <input
            type="number"
            name="interest"
            placeholder="Interés %"
            required
            value={form.interest === 0 ? "" : form.interest}
            onChange={handleChangeNumber}
          />
        </div>

        <div>
          <p>
            Total: <b>{form.total}bs</b>
          </p>
        </div>
      </StyledInputArea>

      <StyledInputArea>
        <div className="input-labels-content">
          <label>Fecha de inicio</label>
          <input
            type="date"
            onChange={handleChangeInput}
            name="start_date"
            value={form.start_date}
          />
        </div>
        <div className="input-labels-content">
          <label>Plazo final</label>
          <input
            type="date"
            onChange={handleChangeInput}
            name="end_date"
            value={form.end_date}
          />
        </div>
      </StyledInputArea>

      <StyledInputArea>
        <select
          onChange={handleChangeSelect}
          name="frecuency"
          value={form.frecuency}
        >
          <option value="diario">Diario</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
          <option value="anual">Anual</option>
        </select>
        <p>
          <b>{form.installments}</b> cuota{form.installments > 1 && "s"} de{" "}
          <b>
            {amountPerInstallment}
            bs
          </b>
        </p>
      </StyledInputArea>

      <h3>Garantía</h3>
      <input
        type="text"
        placeholder="Garantía"
        name="name"
        onChange={handleChangeGuarantee}
        value={form.guarantee.name}
      />
      <input
        type="number"
        placeholder="Valor estimado (bs)"
        name="estimated_value"
        onChange={handleChangeGuarantee}
        value={form.guarantee.estimated_value}
      />
      <textarea
        placeholder="Descripcion"
        name="description"
        onChange={handleChangeGuarantee}
      ></textarea>

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
