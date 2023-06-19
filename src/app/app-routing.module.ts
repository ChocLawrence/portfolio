import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';
import { PageNotFoundComponent } from './components/sections/page-not-found/page-not-found.component';

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
    ],
    pathMatch: 'prefix'
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
