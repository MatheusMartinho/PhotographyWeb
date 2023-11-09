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
    // Initialize the form group
    this.contactForm = this.fb.group({
      to_name: ['', Validators.required],
      from_name: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize EmailJS with your user ID
    emailjs.init('XH17M5nFqGgYu70kY'); // Replace 'your-user-id' with your actual EmailJS user ID
  }

  sendEmail() {
    if (this.contactForm.valid) {
      // Here, we just call send() because the user ID has already been set in ngOnInit()
      emailjs.send('service_y451f2y','template_ji0ar7q', this.contactForm.value)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    }
  }
}
