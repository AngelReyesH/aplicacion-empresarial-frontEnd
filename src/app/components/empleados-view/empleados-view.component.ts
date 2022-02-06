import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceGeneralService } from 'src/app/services/service-general.service';

@Component({
  selector: 'app-empleados-view',
  templateUrl: './empleados-view.component.html',
  styleUrls: ['./empleados-view.component.css']
})
export class EmpleadosViewComponent implements OnInit {

  constructor(private service: ServiceGeneralService) { }
  arrayEmployes:any;
  employeeUpdate:any;
  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.service.getEmployees().subscribe((response:any)=>{this.arrayEmployes=response;console.log(response)});
  }
  AddEmployee(data:NgForm){
    if(this.employeeUpdate==null){
      if(data.value.brm!=null&&data.value.name!=null&&data.value.photo&&data.value.post!=null){
        this.service.addEmployee({"brm":data.value.brm,"name":data.value.name,"photo":data.value.photo,"post":data.value.post}).subscribe((response:any)=>{
         console.log(response);
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
         console.log(response);
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
    alert("update")
    this.service.getEmployeesById(id).subscribe((employee:any)=>{
      console.log(employee)
      this.employeeUpdate=employee;
    })
  }
}
