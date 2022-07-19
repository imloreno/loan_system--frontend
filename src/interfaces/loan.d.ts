export interface ILoan {
  id_loan: number;
  total: number;
  without_interest: number;
  interest: number;
  amount_paid: number;
  start_date: string;
  end_date: string;
  frecuency: string;
  installments: number;
  pending: boolean;
  id_employee: number;
  id_client: number;
}
