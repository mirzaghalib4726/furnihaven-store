// user-profile.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <!-- Profile Header -->
          <div class="bg-indigo-600 p-6 text-white">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="h-16 w-16 rounded-full object-cover"
                  src="https://via.placeholder.com/150"
                  alt="Profile picture"
                />
              </div>
              <div>
                <h1 class="text-2xl font-bold">
                  {{ profileForm.get('name')?.value || 'Your Name' }}
                </h1>
                <p class="text-indigo-100">
                  {{ profileForm.get('email')?.value || 'your@email.com' }}
                </p>
              </div>
            </div>
          </div>

          <!-- Profile Form -->
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-6">
              Profile Information
            </h2>
            <form
              [formGroup]="profileForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <!-- Personal Information -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      profileForm.get('name')?.touched &&
                      profileForm.get('name')?.invalid
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
                      profileForm.get('email')?.touched &&
                      profileForm.get('email')?.invalid
                        ? 'border-red-500'
                        : ''
                    }}"
                  />
                </div>
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone Number</label
                >
                <input
                  id="phone"
                  type="tel"
                  formControlName="phone"
                  placeholder="Enter your phone number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <!-- Address -->
              <div>
                <label
                  for="address"
                  class="block text-sm font-medium text-gray-700"
                  >Shipping Address</label
                >
                <textarea
                  id="address"
                  formControlName="address"
                  placeholder="Enter your shipping address"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows="3"
                ></textarea>
              </div>

              <!-- Preferences -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Newsletter Subscription</label
                >
                <div class="flex items-center">
                  <input
                    id="newsletter"
                    type="checkbox"
                    formControlName="newsletter"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label for="newsletter" class="ml-2 text-sm text-gray-600">
                    Subscribe to our newsletter for exclusive offers
                  </label>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex justify-end space-x-4">
                <button
                  type="button"
                  (click)="resetForm()"
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  [disabled]="profileForm.invalid || profileForm.pristine"
                  class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
                         disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <!-- Account Stats -->
          <div class="p-6 border-t border-gray-200">
            <h2 class="text-xl font-semibold text-gray-800 mb-6">
              Account Overview
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="text-center p-4 bg-gray-50 rounded-md">
                <p class="text-2xl font-bold text-indigo-600">5</p>
                <p class="text-sm text-gray-600">Orders Placed</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-md">
                <p class="text-2xl font-bold text-indigo-600">2</p>
                <p class="text-sm text-gray-600">Items in Cart</p>
              </div>
              <div class="text-center p-4 bg-gray-50 rounded-md">
                <p class="text-2xl font-bold text-indigo-600">3</p>
                <p class="text-sm text-gray-600">Wishlist Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class UserProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      newsletter: [false],
    });

    // Sample initial data - replace with actual user data from your service
    this.profileForm.patchValue({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Furniture Lane, Design City, DC 12345',
      newsletter: true,
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      // Add your profile update logic here (e.g., API call)
    }
  }

  resetForm() {
    this.profileForm.reset({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Furniture Lane, Design City, DC 12345',
      newsletter: true,
    });
  }
}
