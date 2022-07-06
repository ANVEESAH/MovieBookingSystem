import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser :string | null = null;

  constructor(private router: Router) { }
  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/home']).then(()=>{window.location.reload();});
  }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser);
  }

}
