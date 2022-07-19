import { ILoan } from "interfaces/loan";

const formatLoanToRedux = (observation: any): ILoan => {
  const {
    id_prestamo,
    monto_total,
    monto_sin_intereses,
    interes,
    monto_pagado,
    fecha_inicio,
    fecha_limite,
    frecuencia_pago,
    numero_cuotas,
    pendiente,
    persona: { id_persona },
    empleado: { id_empleado },
  } = observation;
  return {
    id_loan: id_prestamo,
    total: monto_total,
    without_interest: monto_sin_intereses,
    interest: interes,
    amount_paid: monto_pagado,
    start_date: fecha_inicio,
    end_date: fecha_limite,
    frecuency: frecuencia_pago,
    installments: numero_cuotas,
    pending: pendiente,
    id_employee: id_persona,
    id_client: id_empleado,
  };
};

const formatLoanToApi = (props: ILoan) => {
  const {
    id_loan,
    total,
    without_interest,
    interest,
    amount_paid,
    start_date,
    end_date,
    frecuency,
    installments,
    pending,
    id_employee,
    id_client,
  } = props;
  return {
    id_prestamo: id_loan,
    monto_total: total,
    monto_sin_intereses: without_interest,
    interes: interest,
    monto_pagado: amount_paid,
    fecha_inicio: start_date,
    fecha_limite: end_date,
    frecuencia_pago: frecuency,
    numero_cuotas: installments,
    pendiente: pending,
    persona: { id_persona: id_employee },
    empleado: { id_empleado: id_client },
  };
};

export { formatLoanToRedux, formatLoanToApi };
