let servicesData = [
  {
    id: 1,
    Cliente: 'Marilda de Carlos Ramos',
    Endereco: 'Rua Dois de julho',
    Servico: 'Manicure',
    Horario: '15:25',
    TaxaServico: '3%',
    ValorServico: 'R$ 35,00',
    Desconto: 'R$ 1,05',
    TotalReceber: 'R$ 33,96',
    status: 'SCHEDULED',
    accept: false,
    latitude: -23.595853,
    longitude: -46.600936,
  },
  {
    id: 2,
    Cliente: 'Edilson da Silva',
    Endereco: 'Rua Comendador João Gabriel',
    Servico: 'Pedicure',
    Horario: '17:25',
    TaxaServico: '3%',
    ValorServico: 'R$ 25,00',
    Desconto: 'R$ 1,00',
    TotalReceber: 'R$ 30,00',
    status: 'SCHEDULED',
    accept: false,
    latitude: -23.609901,
    longitude: -46.640713,
  },
  {
    id: 3,
    Cliente: 'Flavia Moreira de Castro',
    Endereco: 'Rua Sete de Setembro',
    Servico: 'Penteado',
    Horario: '18:00',
    TaxaServico: '5%',
    ValorServico: 'R$ 200,00',
    Desconto: 'R$ 30,00',
    TotalReceber: 'R$ 150,00',
    status: 'SCHEDULED',
    accept: false,
    latitude: -23.660779,
    longitude: -46.567261,
  },
  {
    id: 4,
    Cliente: 'Marcos Paulo da Cantareira',
    Endereco: 'Av 9 de Julho',
    Servico: 'Cabeleireiro',
    Horario: '19:30',
    TaxaServico: '5%',
    ValorServico: 'R$ 90,00',
    Desconto: 'R$ 4,00',
    TotalReceber: 'R$ 86,00',
    status: 'SCHEDULED',
    accept: false,
    latitude: -23.555278,
    longitude: -46.6493,
  },
];

const getServicesData = params => {
  const services = servicesData.filter(
    service => (service.status = params.status),
  );
  return Promise.resolve(services);
};

const finishService = param => {
  servicesData.map(service => {
    if (param.id === service.id) {
      service.status = 'FINISHED';
    }
    return service;
  });

  return Promise.resolve({ ok: true });
};

export { getServicesData, finishService };
