import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosViewComponent } from './components/empleados-view/empleados-view.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: EmpleadosViewComponent
  },
  {
    path: "**",
    redirectTo: "empleados",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule { }
