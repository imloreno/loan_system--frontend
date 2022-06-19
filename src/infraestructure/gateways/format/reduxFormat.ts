import { ApiPerson, IPerson } from "interfaces/person";

const fortmatToRedux = (person: ApiPerson): IPerson => {
  return {
    id: person.id_persona,
    nombres: person.nombres,
    apellidos: person.apellidos,
    ci: [person.ci.slice(0, -2), person.ci.slice(-2)],
    fecha_nacimiento: person.fecha_nacimiento.replaceAll("/", "-"),
    estado: person.estado,
  };
};
const formatReduxToApi = (person: any): ApiPerson => {
  return {
    id_persona: person.id,
    nombres: person.nombres,
    apellidos: person.apellidos,
    ci: person.ci.join(""),
    fecha_nacimiento: person.fecha_nacimiento.replaceAll("/", "-"),
    estado: person.estado,
  };
};

export { fortmatToRedux, formatReduxToApi };
