import axios from "axios";
import backendLink from "application/common/links";
import { ApiPerson } from "interfaces/person";

//Get
const apiGetPersonList = async () => {
  const response = await axios.get(`${backendLink}/persona/listar`);
  return response.data;
};

//Post
const apiCreatePerson = async (person: ApiPerson) => {
  await axios.post(`${backendLink}/persona/agregar`, person);
  return true;
};

//Put
const apiUpdatePerson = async (person: ApiPerson) => {
  axios.put(`${backendLink}/persona/actualizar`, person);
  return true;
};

//Delete
const apiDeletePerson = async (id: number) => {
  axios.delete(`${backendLink}/persona/eliminar/${id}`);
};

export { apiGetPersonList, apiCreatePerson, apiUpdatePerson, apiDeletePerson };
