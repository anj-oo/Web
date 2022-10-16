import { StudenResolveService } from "./services/student-resolve.service";
import { CanDeactiveGuardService } from "./services/candeactive-guard.service";
import { StudentGuardService } from "./services/student-guard.service";
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo:'Home', pathMatch: "full"},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent, canDeactivate:[CanDeactiveGuardService]},
  {path: 'Students', component: StudentsComponent,resolve:{students:StudenResolveService}},
  // {path: 'Students', component: StudentsComponent,resolve:{students:StudenResolveService}, 
  // canActivate:[StudentGuardService]},
  {path: 'Students/StudentDetails/:id', component: StudentDetailsComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
    imports:[
          RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}