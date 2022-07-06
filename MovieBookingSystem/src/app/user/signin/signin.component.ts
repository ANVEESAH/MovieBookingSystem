import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/userservices/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _loginservices:LoginService,private router:Router) { }

  log:any[]=[];
  signinform= new FormGroup({
    Emailaddress:new FormControl(),
    passwords:new FormControl()

    
   
  });
  
  onsubmit(){
    if(this.signinform.valid){
    this._loginservices.onsubmit().subscribe(
      (res: any) =>{
        this.log = res;
        
        const user = res.find((a:any) => {
          return a.email === this.signinform.value.Emailaddress && a.password === this.signinform.value.passwords;
        });
        if(user){
          localStorage.setItem('loggedInUser', user.email);
          
          alert("Login success");
          this.signinform.reset();
          this.router.navigate(['/home']).then(() => window.location.reload());
        }
        else{
          alert("user not found");
       
       

      }},err=>{
        err =alert("something went wrong");
      }
      
    
    ) }}
  
 

  ngOnInit(): void {
    
    
  }

}
