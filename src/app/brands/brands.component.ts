import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-gray-900 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center"
      >
        <h1
          class="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg"
        >
          Discover Our Brands
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Explore a curated selection of top furniture brands at Furniture
          Haven, offering styles from modern minimalism to bohemian flair.
        </p>
      </div>
    </section>

    <!-- Brands Grid Section -->
    <section class="py-16 bg-white text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand Card: Burrow -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Burrow+Logo"
              alt="Burrow Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Burrow</h3>
              <p class="text-gray-600 mb-4">
                Known for modular sofas and minimalist designs, Burrow offers
                affordable, customizable furniture with free shipping.
              </p>
              <a
                href="https://burrow.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Burrow
              </a>
            </div>
          </div>

          <!-- Brand Card: Thuma -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Thuma+Logo"
              alt="Thuma Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Thuma</h3>
              <p class="text-gray-600 mb-4">
                Thuma specializes in minimalist, sustainably sourced wooden
                furniture, particularly easy-to-assemble bed frames.
              </p>
              <a
                href="https://thuma.co"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Thuma
              </a>
            </div>
          </div>

          <!-- Brand Card: Soho Home -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Soho+Home+Logo"
              alt="Soho Home Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Soho Home</h3>
              <p class="text-gray-600 mb-4">
                Soho Home offers luxurious furniture with bold patterns, rich
                textiles, and modern designs inspired by Soho House properties.
              </p>
              <a
                href="https://sohohome.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Soho Home
              </a>
            </div>
          </div>

          <!-- Brand Card: West Elm -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=West+Elm+Logo"
              alt="West Elm Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">West Elm</h3>
              <p class="text-gray-600 mb-4">
                A go-to for modern, urban designs, West Elm offers sustainable
                furniture perfect for city dwellers.
              </p>
              <a
                href="https://westelm.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore West Elm
              </a>
            </div>
          </div>

          <!-- Brand Card: Anthropologie -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Anthropologie+Logo"
              alt="Anthropologie Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Anthropologie</h3>
              <p class="text-gray-600 mb-4">
                Anthropologie brings bohemian flair with colorful, patterned
                furniture that adds personality to any space.
              </p>
              <a
                href="https://anthropologie.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Anthropologie
              </a>
            </div>
          </div>

          <!-- Brand Card: Serena & Lily -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Serena+&+Lily+Logo"
              alt="Serena & Lily Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Serena & Lily</h3>
              <p class="text-gray-600 mb-4">
                Serena & Lily offers coastal-inspired furniture with wicker and
                nautical themes, perfect for a serene home.
              </p>
              <a
                href="https://serenaandlily.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Serena & Lily
              </a>
            </div>
          </div>

          <!-- Brand Card: Castlery -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Castlery+Logo"
              alt="Castlery Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Castlery</h3>
              <p class="text-gray-600 mb-4">
                Castlery provides high-low contemporary furniture with a virtual
                showroom, offering a seamless shopping experience.
              </p>
              <a
                href="https://castlery.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Castlery
              </a>
            </div>
          </div>

          <!-- Brand Card: Maiden Home -->
          <div
            class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x150?text=Maiden+Home+Logo"
              alt="Maiden Home Logo"
              class="w-full h-40 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Maiden Home</h3>
              <p class="text-gray-600 mb-4">
                Maiden Home crafts custom-made, sustainable furniture with a
                focus on quality and timeless design.
              </p>
              <a
                href="https://maidenhome.com"
                target="_blank"
                class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Maiden Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gray-900 text-white text-center">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl font-semibold mb-4">Find Your Perfect Style</h2>
        <p class="text-gray-300 mb-8 max-w-xl mx-auto">
          Browse our collections from these amazing brands and discover
          furniture that suits your unique taste.
        </p>
        <a
          routerLink="/shop"
          class="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  `,
  styles: [],
})
export class BrandsComponent {}
