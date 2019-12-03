import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContactCreateComponent} from "./contact/create/contact.create.component";
import {ContactEditComponent} from "./contact/edit/contact.edit.component";


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/create', component: ContactCreateComponent },
  { path: 'contact/edit/:id', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
