import { IGuarantee } from "interfaces/guarantee";

const formatGuaranteeToRedux = (observation: any): IGuarantee => {
  const {
    id_garantia,
    nombre_garantia,
    desripcion_garantia,
    valor_estimado,
    prestamo: { id_prestamo },
  } = observation;
  return {
    id_guarantee: id_garantia,
    name: nombre_garantia,
    description: desripcion_garantia,
    estimated_value: valor_estimado,
    id_loan: id_prestamo,
  };
};

const formatGuaranteeToApi = (props: IGuarantee) => {
  const { id_guarantee, name, description, estimated_value, id_loan } = props;
  return {
    id_garantia: id_guarantee,
    nombre_garantia: name,
    desripcion_garantia: description,
    valor_estimado: estimated_value,
    prestamo: { id_loan },
  };
};

export { formatGuaranteeToRedux, formatGuaranteeToApi };
