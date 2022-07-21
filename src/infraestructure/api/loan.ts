import axios from "axios";
import backendLink from "application/common/links";

//Get
const apiGetLoanList = async () => {
  const response = await axios.get(`${backendLink}/prestamo/listar`);
  return response.data;
};

//Post
const apiAddLoan = async (Loan: any) => {
  await axios.post(`${backendLink}/prestamo/agregar`, Loan);
};

//Delete
const apiDeleteLoan = async (id: number) => {
  await axios.delete(`${backendLink}/prestamo/eliminar/${id}`);
};

export { apiGetLoanList, apiAddLoan, apiDeleteLoan };
