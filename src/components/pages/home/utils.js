const actions = [
  {
    label: 'Serviços disponíveis',
    link: 'AvailableServices',
    icon: {
      name: 'stopwatch',
      type: 'Entypo',
    },
  },
  {
    label: 'Serviços agendados',
    link: 'ScheduleServices',
    icon: {
      name: 'check-square',
      type: 'Feather',
    },
  },
  {
    label: 'Serviços cancelados',
    link: '#',
    disabled: true,
    icon: {
      name: 'cancel',
      type: 'MaterialCommunityIcons',
    },
  },
  {
    label: 'Perfil do Usuário',
    link: 'ProfileUser',
    disabled: true,
    icon: {
      name: 'user-circle-o',
      type: 'FontAwesome',
    },
  },
  {
    label: 'Ajuda',
    link: 'Help',
    disabled: true,
    icon: {
      name: 'help',
      type: 'Entypo',
    },
  },
];

export { actions };
