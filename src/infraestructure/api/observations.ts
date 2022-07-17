import axios from "axios";
import backendLink from "application/common/links";

//Get
const apiGetObservationList = async () => {
  const response = await axios.get(`${backendLink}/observaciones/listar`);
  return response.data;
};

export { apiGetObservationList };
