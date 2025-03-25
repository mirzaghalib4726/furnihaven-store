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
    <nav
      class="bg-gradient-to-r from-amber-600 to-amber-400 p-4 shadow-lg relative z-10"
    >
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <a
          routerLink="/"
          class="text-white text-2xl font-bold tracking-wider drop-shadow-md cursor-pointer"
          >Furniture Haven.</a
        >

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <a
            routerLink="/about"
            class="text-white hover:text-amber-100 transition-colors duration-300 cursor-pointer"
            >About Us</a
          >
          <a
            routerLink="/brands"
            class="text-white hover:text-amber-100 transition-colors duration-300 cursor-pointer"
            >Brands</a
          >
          <a
            routerLink="/category"
            class="text-white hover:text-amber-100 transition-colors duration-300 cursor-pointer"
            >Category</a
          >
          <a
            routerLink="/contact"
            class="text-white hover:text-amber-100 transition-colors duration-300 cursor-pointer"
            >Contact Us</a
          >
        </div>

        <!-- Icons -->
        <div class="flex space-x-4 items-center">
          <div class="flex space-x-4 z-50">
            <!-- Higher z-index for search buttons -->
            <button
              (click)="openSearchModal()"
              class="text-white hover:text-amber-100"
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
            <button
              (click)="openImageSearchModal()"
              class="text-white hover:text-amber-100"
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
            <button
              (click)="navigateToCart()"
              class="text-white relative hover:text-amber-100"
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
                class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >0</span
              >
            </button>
            <button
              (click)="navigateToUserProfile()"
              class="text-white hover:text-amber-100"
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
