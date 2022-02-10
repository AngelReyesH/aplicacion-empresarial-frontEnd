import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router,private route: ActivatedRoute){}

  title = 'aplicacionEmpresarial';
 user:any;
  ngOnInit() {
   var ss=JSON.parse(localStorage.getItem("user"));
   this.user=ss.perfil;
  }

  setLink(link:any){
    var ss=JSON.parse(localStorage.getItem("user"));
    var userId=this.route.snapshot.paramMap.get(ss.id);
    this.router.navigate(['/'+link,{id:userId}])
    console.log("/"+link)
  }
}
