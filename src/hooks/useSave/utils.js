const removeValidKey = data => {
  let fields = { ...data };
  const dataMap = {};
  for (let field in fields) {
    dataMap[field] = fields[field].value;
  }
  return dataMap;
};

const removeFieldsEmpty = data => {
  let fields = { ...data };
  const dataMap = {};
  for (let field in fields) {
    if (fields[field]) {
      dataMap[field] = fields[field];
    }
  }
  return dataMap;
};

const changeFormatService = data => {
  let fields = { ...data };
  const servicos = fields.Servicos.map(service => service.Servicos[0]);
  fields.Servicos = servicos;
  return fields;
};

const filterServicesSelected = data => {
  let fields = { ...data };
  fields.Servicos = fields.Servicos.filter(service => service.active);
  return fields;
};

const unifyData = ({ categoria, contactData }) => {
  return {
    ...contactData,
    Servicos: {
      value: categoria.data,
    },
  };
};

export const prepareDataForSend = data =>
  filterServicesSelected(
    changeFormatService(removeFieldsEmpty(removeValidKey(unifyData(data)))),
  );
