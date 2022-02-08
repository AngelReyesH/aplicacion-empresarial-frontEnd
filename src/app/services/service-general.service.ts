import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  constructor(private http: HttpClient) { }

  private urlHerokuEmpresarial = "https://empresarial-b.herokuapp.com/api/v1";

  getEmployees(){
    return this.http.get(this.urlHerokuEmpresarial+"/employees");
  } 
  getEmployeesById(id){
    return this.http.get(this.urlHerokuEmpresarial+"/employees/"+id);
  }
  addEmployee(body:any){
    return this.http.post(this.urlHerokuEmpresarial+"/employees",body);
  }
  deleteEmployee(id:any){
    return this.http.delete(this.urlHerokuEmpresarial+"/employees/"+id);
  }
  updateEmployee(body:any,id:any){
    return this.http.put(this.urlHerokuEmpresarial+"/employees/"+id,body);
  }
  getUserByUserName(user:any){
    return this.http.get(this.urlHerokuEmpresarial+"/user/login?user="+user);
  }
}
