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
  userId:any;
  ngOnInit() {
    this.user=localStorage.getItem("user");
    this.userId=this.route.snapshot.paramMap.get(this.user.id);
  }

  setLink(link:any){
    this.router.navigate(['/'+link,{id:this.userId}])
    console.log("/"+link)
  }
}
