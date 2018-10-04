import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/content/zfull/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/content/zfull/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/content/zfull/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/content/zfull/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'editors',
        loadChildren: './views/content/zfull/editors/editors.module#EditorsModule'
      },
      {
        path: 'forms',
        loadChildren: './views/content/zfull/forms/forms.module#FormsModule'
      },
      {
        path: 'google-maps',
        loadChildren: './views/content/zfull/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/content/zfull/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/content/zfull/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'plugins',
        loadChildren: './views/content/zfull/plugins/plugins.module#PluginsModule'
      },
      {
        path: 'tables',
        loadChildren: './views/content/zfull/tables/tables.module#TablesModule'
      },
      {
        path: 'theme',
        loadChildren: './views/content/zfull/theme/theme.module#ThemeModule'
      },
      {
        path: 'apps',
        loadChildren: './views/content/zfull/apps/apps.module#AppsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/content/zfull/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
