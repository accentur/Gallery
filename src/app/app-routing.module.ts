import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  
  { path: 'elements', loadChildren: () => import('./elemments/elemments.module').then(m => m.ElemmentsModule) },
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule) },
  { path: 'views', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  {path:'mods', loadChildren:()=>import('./mods/mods.module').then(m=>m.ModsModule)},
  { path: '', component: HomeComponent },
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
