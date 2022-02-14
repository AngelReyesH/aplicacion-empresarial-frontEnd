import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceGeneralService } from 'src/app/services/service-general.service';

@Component({
  selector: 'app-empleados-view',
  templateUrl: './empleados-view.component.html',
  styleUrls: ['./empleados-view.component.css']
})
export class EmpleadosViewComponent implements OnInit {

  constructor(private service: ServiceGeneralService,private router:Router) { }
  arrayEmployes:any;
  employeeUpdate:any;
  ngOnInit() {
    var user=this.service.getUser();
    if(user.perfil=="jugador"){
      this.router.navigate(["/home"]);
      alert("su perfil no tiene permisos");

    }else{
      this.getEmployees();
    }
    
  }

  getEmployees(){
    this.service.getEmployees().subscribe((response:any)=>{this.arrayEmployes=response;});
  }
  AddEmployee(data:NgForm){
    if(this.employeeUpdate==null){
      if(data.value.brm!=null&&data.value.name!=null&&data.value.photo&&data.value.post!=null){
        this.service.addEmployee({"brm":data.value.brm,"name":data.value.name,"photo":data.value.photo,"post":data.value.post}).subscribe((response:any)=>{
          if(response.id){
          alert("se Agrego con exito");
          data.reset();
          this.getEmployees();
          }
        })
      }
    }else{
      if(data.value.brm!=null&&data.value.name!=null&&data.value.photo&&data.value.post!=null){
        this.service.updateEmployee({"brm":data.value.brm,"name":data.value.name,"photo":data.value.photo,"post":data.value.post},this.employeeUpdate.id).subscribe((response:any)=>{
          if(response.id){
          alert("se Actualizo con exito");
          data.reset();
          this.getEmployees();
          }
        })
      }
    }
  }
  delete(id){
    this.service.deleteEmployee(id).subscribe((response:any)=>{
      if(response.deleted==true){
        alert("se Elimino con exito");

      this.getEmployees();
      }
    })
  }
  update(id){
    this.service.getEmployeesById(id).subscribe((employee:any)=>{
      this.employeeUpdate=employee;
    })
  }
}
