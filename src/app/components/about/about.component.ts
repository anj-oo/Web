import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute){}

  navigateToHome() {
    // this.route.navigate(['Home']);
      this.route.navigate(['Home'], {relativeTo: this.activatedRoute});
    // this.route.navigateByUrl('Home');
  }

  ngOnInit(): void {
  }

}
