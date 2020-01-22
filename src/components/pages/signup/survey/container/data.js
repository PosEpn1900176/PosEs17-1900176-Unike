const question = [
  {
    id: 'TrabalhaOutroAplicativo',
    type: 'check',
    question: 'Atualmente você está trabalhano em um salão ou aplicativo?'
  },
  {
    id: 'Esterilizacao',
    type: 'text',
    question: 'O que você utiliza para esterilizar os seus equipamentos?'
  },
  {
    id: 'ExperienciaAtendimentoDomicilio',
    type: 'check',
    question: 'Já possui experiência no atendimento ao domicilio?',
  },
  {
    id: 'TempoExperiencia',
    type: 'select',
    question: 'Quanto tempo de experiência você tem?',
    items: [
      {
        text: 'Sem experiência',
        value: 'no-exp'
      },
      {
        text: '1 ano',
        value: '1'
      },
      {
        text: '2 anos',
        value: '2'
      },
      {
        text: '3 anos',
        value: '3'
      },
      {
        text: '4 anos',
        value: '4'
      },
      {
        text: '5 anos ou mais',
        value: '5'
      }
    ]
  }
];

export default question;
