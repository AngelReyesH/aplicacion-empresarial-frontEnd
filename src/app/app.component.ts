import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){}

  title = 'aplicacionEmpresarial';
  user:any;
  ngOnInit() {
    this.user=localStorage.getItem("user");
  }

  setLink(link:any){
    this.router.navigate(['/'+link,{id:this.user.id}])
  }
}
