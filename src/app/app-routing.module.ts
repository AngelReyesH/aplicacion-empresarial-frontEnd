import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosViewComponent } from './components/empleados-view/empleados-view.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule { }
