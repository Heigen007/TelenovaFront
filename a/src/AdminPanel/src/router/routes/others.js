export default [
  {
    path: '/ChCategory',
    name: 'ChCategory',
    component: () => import('@/views/extensions/acl/AccessControl.vue'),
    meta: {
      resource: 'ACL',
      action: 'read',
    },
  },
]
