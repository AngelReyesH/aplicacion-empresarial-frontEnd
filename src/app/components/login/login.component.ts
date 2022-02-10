import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceGeneralService } from 'src/app/services/service-general.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceGeneralService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    localStorage.removeItem("user");
  }
  
  login(data: NgForm){
    this.service.getUserByUserName(data.value.user).subscribe((response:any) => {
        console.log(response);
        if((data.value.user==response.userName || data.value.user==response.email)&&Md5.hashStr(data.value.password)==response.password){
          alert("Login Exitoso");
          localStorage.setItem("user",JSON.stringify(response));
          this.router.navigate(['/home'])
        }else{
          alert("La Combinacion de usuario y password son Incorrectas!");

        }
    });
  }

}
