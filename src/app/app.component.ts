import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceGeneralService } from './services/service-general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router,private service: ServiceGeneralService){}

  title = 'aplicacionEmpresarial';
 user:any;
  ngOnInit() {
   
   this.user={"perfil":"none"};
 
  }

  setLink(link:any){
    this.user=this.service.getUser();
    this.router.navigate(['/'+link+"/"+this.user.id],{skipLocationChange: true});
    console.log("/"+link);
  }
}
