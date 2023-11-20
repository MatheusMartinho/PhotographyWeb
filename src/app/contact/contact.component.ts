import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      to_name: ['', Validators.required],
      from_name: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    emailjs.init('XH17M5nFqGgYu70kY');
  }

  sendEmail() {
    if (this.contactForm.valid) {
      emailjs.send('service_y451f2y', 'template_ji0ar7q', this.contactForm.value)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          this.resetForm(); // Reset the form after successful email sending
        }, (err) => {
          console.log('FAILED...', err);
          alert('Failed to send email. Please try again later.');
        });
    }
  }

  resetForm() {
    this.contactForm.reset();
  }
}
