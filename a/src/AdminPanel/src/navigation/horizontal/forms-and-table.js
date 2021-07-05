export default [
  {
    header: 'Categories',
    icon: 'ClipboardIcon',
    children: [
      {
        title: 'All categories',
        route: { name: 'AllCategories', params: { id: 1 } },
      },
      {
        title: 'Create new',
        route: { name: 'ChCategory', params: { id: 1 } },
      },
    ],
  },
]
