import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'sidebar', component: SidebarComponent }
    ]
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      // { path: 'navbar', component: NavbarComponent },
      // { path: 'sidebar', component: SidebarComponent }
    ]
  },

  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
