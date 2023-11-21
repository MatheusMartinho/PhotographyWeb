import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentTime: string = new Date().toLocaleTimeString();
  private clockSubscription!: Subscription;
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
    this.clockSubscription = interval(1000)
      .subscribe(() => {
        this.currentTime = new Date().toLocaleTimeString();
      });
  }
  ngOnDestroy() {
    if (this.clockSubscription) {
      this.clockSubscription.unsubscribe();
    }
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
