export const buildParams = (method, params = {}) => {
  return method.includes('get') ? { params } : params;
};
