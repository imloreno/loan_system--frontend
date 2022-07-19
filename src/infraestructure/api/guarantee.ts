import axios from "axios";
import backendLink from "application/common/links";

//Get
const apiGetGuaranteeList = async () => {
  const response = await axios.get(`${backendLink}/garantia/listar`);
  return response.data;
};

//Post
const apiAddGuarantee = async (Guarantee: any) => {
  await axios.post(`${backendLink}/garantia/agregar`, Guarantee);
};

//Delete
const apiDeleteGuarantee = async (id: number) => {
  await axios.delete(`${backendLink}/garantia/eliminar/${id}`);
};

export { apiGetGuaranteeList, apiAddGuarantee, apiDeleteGuarantee };
