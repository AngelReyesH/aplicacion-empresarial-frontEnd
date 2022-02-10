import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosViewComponent } from './components/empleados-view/empleados-view.component';
import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'empleados/:id',
    component: EmpleadosViewComponent
  },
  {
    path: 'login/:login',
    component: LoginComponent
  },
  {
    path: 'game',
    component: GameComponent
  },{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule { }
