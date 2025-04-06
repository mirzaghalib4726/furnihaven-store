// contact.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="bg-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Full Name</label
                >
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  placeholder="Enter your name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                         {{
                    contactForm.get('name')?.touched &&
                    contactForm.get('name')?.invalid
                      ? 'border-red-500'
                      : ''
                  }}"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email Address</label
                >
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  placeholder="Enter your email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                         {{
                    contactForm.get('email')?.touched &&
                    contactForm.get('email')?.invalid
                      ? 'border-red-500'
                      : ''
                  }}"
                />
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700"
                  >Subject</label
                >
                <input
                  id="subject"
                  type="text"
                  formControlName="subject"
                  placeholder="Enter subject"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                  >Message</label
                >
                <textarea
                  id="message"
                  formControlName="message"
                  placeholder="Write your message here"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                         {{
                    contactForm.get('message')?.touched &&
                    contactForm.get('message')?.invalid
                      ? 'border-red-500'
                      : ''
                  }}"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="contactForm.invalid"
                class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 
                       disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg
                  class="w-6 h-6 text-indigo-600 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">Address</h3>
                  <p class="text-gray-600">
                    123 Furniture Lane<br />Design City, DC 12345
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="w-6 h-6 text-indigo-600 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="w-6 h-6 text-indigo-600 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="text-gray-600">support&#64;furniturestore.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // Add your form submission logic here (e.g., API call)
      this.contactForm.reset();
    }
  }
}
