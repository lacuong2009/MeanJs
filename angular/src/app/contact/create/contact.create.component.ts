import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact.create.component.html',
  styleUrls: []
})
export class ContactCreateComponent implements OnInit {

  @Input() contactDetails = {firstName: '', lastName: '', email: '', company: '', phone: null };

  constructor(private service: ContactService, private router: Router) {
  }

  ngOnInit() {
  }

  add(data) {
    console.log(data);
    this.service.create(this.contactDetails).subscribe((data: {}) => {
      this.router.navigate(['/contact'])
    })
  }
}
