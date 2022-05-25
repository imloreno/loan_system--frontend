import { IPerson, TPerson } from "interfaces/person";

const fortmatToRedux = (person: any): IPerson => {
  return {
    id: person.id,
    nombres: person.nombres,
    apellidos: person.apellidos,
    ci: [person.ci.slice(-2), person.ci.slice(0, -2)],
    fecha_nacimiento: person.fecha_nacimiento.replaceAll("/", "-"),
    estado: person.estado,
  };
};

export { fortmatToRedux };
