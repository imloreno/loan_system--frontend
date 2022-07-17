import axios from "axios";
import backendLink from "application/common/links";

//Get
const apiGetObservationList = async () => {
  const response = await axios.get(`${backendLink}/observaciones/listar`);
  return response.data;
};

//Post
const apiAddObservation = async (observation: any) => {
  await axios.post(`${backendLink}/observaciones/agregar`, observation);
};

//Delete
const apiDeleteObservation = async (id: number) => {
  await axios.delete(`${backendLink}/observaciones/eliminar/${id}`);
};

export { apiGetObservationList, apiAddObservation, apiDeleteObservation };
