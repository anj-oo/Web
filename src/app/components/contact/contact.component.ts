import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: any;
  lastName: any;
  subject: any;

  constructor() { }

  ngOnInit(): void {
  }

  canExit() {
    if (this.firstName || this.lastName || this.subject) {
      return confirm('You unsaved chnages do you want to disacrd?');
    } else {
      return true;
    }
  }

}
