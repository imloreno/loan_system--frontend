import axios from "axios";
import backendLink from "application/common/links";
import { IPerson, TPerson } from "interfaces/person";

type GetPersonList = (e: IPerson[]) => void;

//Get
const apiGetPersonList = async (callback: GetPersonList) => {
  const response = await axios.get(`${backendLink}/persona/listar`);
  callback(response.data);
};

//Post
const apiCreatePerson = async (person: TPerson) => {
  axios.post(`${backendLink}/persona/agregar`, {
    ...person,
    id: parseInt(person.id.toString().slice(5)),
  });
};

//Put
const apiUpdatePerson = async (person: TPerson) => {
  axios.put(`${backendLink}/persona/actualizar`, person);
};

//Delete
const apiDeletePerson = async (id: number) => {
  axios.delete(`${backendLink}/persona/eliminar/${id}`);
};

export { apiGetPersonList, apiCreatePerson, apiUpdatePerson, apiDeletePerson };
