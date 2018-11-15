export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   name: 'Administrator',
  //   url: '/admin',
  //   icon: 'icon-speedometer',
  // },
  {
    name: 'IT E-Banking',
    url: '/iteb',
    icon: 'fa fa-hdd-o',
    children: [
      {
        name: 'ATM',
        url: '/iteb/atm',
        icon: 'fa fa-credit-card',
      },
      {
        name: 'Rekonsiliasi ATM',
        url: '/iteb/atm-rekon',
        icon: 'icon-calculator',
      },
      // {
      //   name: 'Berita Acara ATM',
      //   url: '/iteb/atm/ba',
      //   icon: 'icon-pencil',
      // }
    ]
  }
];
