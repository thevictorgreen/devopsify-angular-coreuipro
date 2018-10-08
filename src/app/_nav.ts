export const navItems = [
  {
    name: 'DASHBOARD',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'ACCOUNT',
    url: '/account',
    icon: 'fa fa-group',
    children: [
      {
        name: 'Billing',
        url: '/account/billing',
        icon: 'fa fa-credit-card'
      },
      {
        name: 'Company Profile',
        url: '/account/company-profile',
        icon: 'fa fa-institution'
      },
      {
        name: 'User Profile',
        url: '/account/user-profile',
        icon: 'fa fa-user'
      }
    ]
  },
  {
    name: 'CLOUDS',
    url: '/clouds',
    icon: 'fa fa-cloud',
    children: [
      {
        name: 'List Clouds',
        url: '/clouds/list',
        icon: 'fa fa-cloud'
      },
      {
        name: 'Add Cloud',
        url: '/clouds/add',
        icon: 'fa fa-cloud'
      }
    ]
  },
  {
    name: 'DOMAINS',
    url: '/domains',
    icon: 'fa fa-clone',
    children: [
      {
        name: 'List Domains',
        url: '/domains/list',
        icon: 'fa fa-clone'
      },
      {
        name: 'Add Domain',
        url: '/domains/add',
        icon: 'fa fa-clone'
      }
    ]
  },
  {
    name: 'NAMESPACES',
    url: '/namespaces',
    icon: 'fa fa-gears',
    children: [
      {
        name: 'List Namespaces',
        url: '/namespaces/list',
        icon: 'fa fa-gear'
      },
      {
        name: 'Add Namespace',
        url: '/namespaces/add',
        icon: 'fa fa-gear'
      }
    ]
  },
  {
    name: 'PROJECTS',
    url: '/projects',
    icon: 'fa fa-folder',
    children: [
      {
        name: 'List Projects',
        url: '/projects/list',
        icon: 'fa fa-folder-open'
      },
      {
        name: 'Add Project',
        url: '/projects/add',
        icon: 'fa fa-folder-open'
      }
    ]
  },
  {
    name: 'SERVICES',
    url: '/services',
    icon: 'fa fa-database',
    children: [
      {
        name: 'List Services',
        url: '/services/list',
        icon: 'fa fa-database'
      },
      {
        name: 'Add Service',
        url: '/services/add',
        icon: 'fa fa-database'
      }
    ]
  },
  {
    name: 'SERVERS',
    url: '/servers',
    icon: 'fa fa-server'
  },
  {
    name: 'APPLICATIONS',
    url: '/applications',
    icon: 'fa fa-code',
    children: [
      {
        name: 'List Applications',
        url: '/applications/list',
        icon: 'fa fa-terminal'
      },
      {
        name: 'Add Application',
        url: '/applications/add',
        icon: 'fa fa-terminal'
      }
    ]
  }
];
