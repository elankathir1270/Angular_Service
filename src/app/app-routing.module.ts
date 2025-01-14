import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';

const routes: Routes = [
  {path: '', component:HomeComponent, title:'home'},
  {path: 'admin', component:AdminComponent, title:'admin'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
