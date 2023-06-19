import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio/me',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: LayoutComponent,
    children: [
      {
        path: 'me',
        loadChildren: () => import('./view/view.module').then((module) => module.ViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
