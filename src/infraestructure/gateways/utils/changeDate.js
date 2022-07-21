const getformatDate = (frecuency) => {
  const switchData = {
    diario: "days",
    semanal: "w",
    mensual: "M",
    anual: "y",
  };
  return switchData[frecuency] ?? "days";
};

export { getformatDate };
