export default [
  {
    header: 'PAGES',
  },
  // {
  //   title: 'Email',
  //   route: 'apps-email',
  //   icon: 'MailIcon',
  // },
  // {
  //   title: 'Chat',
  //   route: 'apps-chat',
  //   icon: 'MessageSquareIcon',
  // },
  // {
  //   title: 'Todo',
  //   route: 'apps-todo',
  //   icon: 'CheckSquareIcon',
  // },
  // {
  //   title: 'Calendar',
  //   route: 'apps-calendar',
  //   icon: 'CalendarIcon',
  // },
  {
    title: 'Invoice',
    icon: 'FileTextIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'Preview',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      // {
      //   title: 'Edit',
      //   route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      // },
      // {
      //   title: 'Add',
      //   route: { name: 'apps-invoice-add' },
      // },
    ],
  },
  {
    title: 'Shop',
    icon: 'ShoppingCartIcon',
    route: 'apps-e-commerce-shop',
  },
  // {
  //   title: 'User',
  //   icon: 'UserIcon',
  //   children: [
  //     {
  //       title: 'List',
  //       route: 'apps-users-list',
  //     },
  //     {
  //       title: 'View',
  //       route: { name: 'apps-users-view', params: { id: 21 } },
  //     },
  //     {
  //       title: 'Edit',
  //       route: { name: 'apps-users-edit', params: { id: 21 } },
  //     },
  //   ],
  // },
  {
    title: 'Promo',
    children: [
      {
        title: 'All promo`s',
        route: { name: 'AllPromo`s', params: { id: 1 } },
      },
      {
        title: 'Create new',
        route: { name: 'NewPromo', params: { id: 1 } },
      },
    ],
  },
]
