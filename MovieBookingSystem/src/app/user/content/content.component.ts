import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/userservices/login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 

  constructor(private _loginservice: LoginService,private router:Router) { 

  }
  dbmovies:any[]=[];
  
  loginform = new FormGroup({
    
    first_name:new FormControl(),
    last_name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  });
  save(){
    if(this.loginform.valid){
      console.log(this.loginform.value);
      this._loginservice.save(this.loginform.value).subscribe(
        (std: any) =>{
          this.dbmovies.push(this.loginform.value);
          alert("Registration successfully Completed");
          this.loginform.reset();
        this.router.navigate(['signin'])},//err => {alert("server error")}
          
        
      )
    }
  }

    

  ngOnInit(): void {
    
       
  }

}
