import { AuthService } from "./services/auth.service";
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayLoadingIndicator = false;
  constructor(private activateRoute: ActivatedRoute, private authService: AuthService,
    private router: Router) { }
  
  
  ngOnInit(): void {

    // USED FOR FRAGMENT
    // this.activateRoute.fragment.subscribe((value) => {
    //   console.log(value);
    //   this.jumpTo(value);
    // });

    // SPINNER LOADING WHILE NAVIGATING FROM SCREEN
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }

    })
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
