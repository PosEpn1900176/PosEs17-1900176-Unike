export const buildParams = (method, params = {}) => {
  console.log('Method', method, params);
  return method.includes('get') ? params : params.params;
};
