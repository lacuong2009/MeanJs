import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import {Contact} from "./contact.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contacts: any = [];
  linkCreate = "create";

  constructor(public api: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  page = 1;
  pageSize = 2000;
  collectionSize = 0;

  getContacts() {
    return this.api.getContacts().subscribe((data: any) => {
      this.Contacts = data;
      this.collectionSize = data.length;
    })
  }

  delete(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.api.delete(id).subscribe(data => {
        this.getContacts();
      })
    }
  }
}
