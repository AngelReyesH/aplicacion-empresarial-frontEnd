import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  constructor(private http: HttpClient) { }

  private urlHerokuEmpresarial = "https://empresarial-b.herokuapp.com/api/v1/employees";

  getEmployees(){
    return this.http.get(this.urlHerokuEmpresarial);
  } 
  getEmployeesById(id){
    return this.http.get(this.urlHerokuEmpresarial+"/"+id);
  }
  addEmployee(body:any){
    return this.http.post(this.urlHerokuEmpresarial,body);
  }
  deleteEmployee(id:any){
    return this.http.delete(this.urlHerokuEmpresarial+"/"+id);
  }
  updateEmployee(body:any,id:any){
    return this.http.put(this.urlHerokuEmpresarial+"/"+id,body);
  }
}
