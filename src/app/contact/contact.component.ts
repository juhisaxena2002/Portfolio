// src/app/contact/contact.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  onSubmit() {
    // Handle form submission here, e.g., send the form data to your server or API.
    console.log('Form data submitted:', this.formData);
    
    // Optionally, you can reset the form after submission
    // this.contactForm.resetForm();
  }
  
}

