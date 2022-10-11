import { AuthService } from "./services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute, private authService: AuthService) { }
  
  ngOnInit(): void {
    // this.activateRoute.fragment.subscribe((value) => {
    //   console.log(value);
    //   this.jumpTo(value);
    // });
    throw new Error("Method not implemented.");
  }

  jumpTo(section:any) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
  
  logout() {
    this.authService.logout();
  throw new Error('Method not implemented.');
  }

  login() {
    this.authService.login();
  throw new Error('Method not implemented.');
  }
  title = 'ju';


}
