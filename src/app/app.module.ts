import { AuthService } from "./services/auth.service";
import { StudentGuardService } from "./services/student-guard.service";
import { StudentsService } from "./services/students.service";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app_routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorPageComponent,
    StudentsComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ StudentsService, StudentGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
