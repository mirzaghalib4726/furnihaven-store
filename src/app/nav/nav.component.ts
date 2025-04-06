import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ImageSearchModalComponent } from '../image-search-modal/image-search-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    SearchModalComponent,
    ImageSearchModalComponent,
  ],
  template: `
    <!-- Navbar Component -->
    <nav
      class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-4 shadow-lg relative z-10 w-full"
    >
      <div
        class="flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-full"
      >
        <!-- Logo -->
        <a
          routerLink="/"
          class="text-white text-2xl font-bold tracking-wider drop-shadow-md hover:text-gray-400 transition-colors duration-300"
        >
          Furniture Haven.
        </a>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            routerLink="/about"
            class="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-400 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </a>
          <a
            routerLink="/brands"
            class="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-400 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Brands
          </a>
          <a
            routerLink="/category"
            class="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-400 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Category
          </a>
          <a
            routerLink="/contact"
            class="text-white text-lg font-medium hover:text-gray-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-400 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </a>
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-4">
          <div class="flex space-x-4 z-50">
            <!-- Search Button -->
            <button
              (click)="openSearchModal()"
              class="text-white hover:text-gray-400 hover:border-gray-400 hover:border rounded-full p-1 transition-all duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <!-- Image Search Button -->
            <button
              (click)="openImageSearchModal()"
              class="text-white hover:text-gray-400 hover:border-gray-400 hover:border rounded-full p-1 transition-all duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4h2a2 2 0 012 2v1M8 4H6a2 2 0 00-2 2v1M4 10h16M4 14h16"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex space-x-4">
            <!-- Cart Button -->
            <button
              (click)="navigateToCart()"
              class="text-white relative hover:text-gray-400 hover:border-gray-400 hover:border rounded-full p-1 transition-all duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span
                class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-md"
              >
                0
              </span>
            </button>
            <!-- User Profile Button -->
            <button
              (click)="navigateToUserProfile()"
              class="text-white hover:text-gray-400 hover:border-gray-400 hover:border rounded-full p-1 transition-all duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Overlay to block navbar interaction -->
    <div
      *ngIf="isSearchModalOpen || isImageSearchModalOpen"
      class="fixed inset-0 bg-transparent z-20"
    ></div>

    <!-- Search Modal -->
    <app-search-modal
      *ngIf="isSearchModalOpen"
      (closeModal)="closeSearchModal()"
      (searchQuery)="handleSearch($event)"
    ></app-search-modal>

    <!-- Image Search Modal -->
    <app-image-search-modal
      *ngIf="isImageSearchModalOpen"
      (closeModal)="closeImageSearchModal()"
      (imageSelected)="handleImageSearch($event)"
    ></app-image-search-modal>
  `,
  styles: [],
})
export class NavComponent {
  isSearchModalOpen = false;
  isImageSearchModalOpen = false;

  constructor(private router: Router) {}

  openSearchModal() {
    this.isImageSearchModalOpen = false;
    this.isSearchModalOpen = true;
  }

  openImageSearchModal() {
    this.isSearchModalOpen = false;
    this.isImageSearchModalOpen = true;
  }

  closeSearchModal() {
    this.isSearchModalOpen = false;
  }

  closeImageSearchModal() {
    this.isImageSearchModalOpen = false;
  }

  handleSearch(query: string) {
    console.log('Search query:', query);
  }

  handleImageSearch(image: File) {
    console.log('Image selected for search:', image);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToUserProfile() {
    this.router.navigate(['/user-profile']);
  }
}
