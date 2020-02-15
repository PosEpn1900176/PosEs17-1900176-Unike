const servicesData = [
  {
    id: 1,
    Cliente: 'Marilda de Carlos Ramos',
    Endereco: 'Rua 2 de julho',
    Servico: 'Manicure',
    Horario: '15:25',
    TaxaServico: '3%',
    ValorServico: 'R$ 35,00',
    Desconto: 'R$ 1,05',
    TotalReceber: 'R$ 33,96',
    status: 'SCHEDULED',
    accept: false,
  },
  {
    id: 2,
    Cliente: 'Edilson da Silva',
    Endereco: 'Rua João Gabriel',
    Servico: 'Pedicure',
    Horario: '17:25',
    TaxaServico: '3%',
    ValorServico: 'R$ 25,00',
    Desconto: 'R$ 1,00',
    TotalReceber: 'R$ 30,00',
    status: 'SCHEDULED',
    accept: false,
  },
  {
    id: 3,
    Cliente: 'Flavia Moreira de Castro',
    Endereco: 'Rua 7 de Setembro',
    Servico: 'Penteado',
    Horario: '18:00',
    TaxaServico: '5%',
    ValorServico: 'R$ 200,00',
    Desconto: 'R$ 30,00',
    TotalReceber: 'R$ 150,00',
    status: 'SCHEDULED',
    accept: false,
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
  },
];

const getServicesData = params => {
  return servicesData.filter(service => (service.status = params.status));
};

export default getServicesData;
