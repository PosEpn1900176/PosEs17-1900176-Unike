const actions = [
  {
    label: 'Aguardando profissional',
    link: 'AvailableServices',
    icon: {
      name: 'stopwatch',
      type: 'Entypo',
    },
  },
  {
    label: 'Serviços',
    link: 'ScheduleServices',
    icon: {
      name: 'check-square',
      type: 'Feather',
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
  {
    label: 'Sair',
    link: 'ProfileUser',
    icon: {
      name: 'logout',
      type: 'AntDesign',
    },
  },
];

export { actions };
