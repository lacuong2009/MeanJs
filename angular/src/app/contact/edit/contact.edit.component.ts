import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact.edit.component.html',
  styleUrls: []
})
export class ContactEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  contactDetails:any = {};

  constructor(private service: ContactService, private router: Router, public actRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.service.getContact(this.id).subscribe((data: {}) => {
      this.contactDetails = data;
    })
  }

  edit(data) {
    this.service.update(this.id, data).subscribe((data: {}) => {
      this.router.navigate(['/contact'])
    })
  }
}
