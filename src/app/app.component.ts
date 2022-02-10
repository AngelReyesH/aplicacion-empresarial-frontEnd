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
   this.user=localStorage.getItem("user");
  }

  setLink(link:any){
    var userId=this.route.snapshot.paramMap.get(localStorage.getItem("user"));
    this.router.navigate(['/'+link,{id:userId}])
    console.log("/"+link)
  }
}
