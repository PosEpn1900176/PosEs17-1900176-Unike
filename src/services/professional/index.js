import http from '../http';

const ProfessionalService = {
  post: async param => {
    console.log('PARAMS');
    console.log(JSON.stringify(param));
    try {
      const response = await http.post('Profissional/Adicionar', param);
      console.log('response', response);
      return response;
    } catch (error) {
      console.log('eror', error);
      return error;
    }
  },
};

export { ProfessionalService };
