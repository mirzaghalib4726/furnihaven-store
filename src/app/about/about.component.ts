import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
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
          About Furniture Haven
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Discover our story, mission, and the passion behind bringing stylish
          and affordable furniture to your home.
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 bg-white text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Text -->
          <div>
            <h2 class="text-3xl font-semibold mb-6">Our Story</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Founded in 2015, Furniture Haven started with a simple idea: to
              make high-quality, stylish furniture accessible to everyone. What
              began as a small family business has grown into a trusted name in
              home decor, serving thousands of happy customers across the
              country.
            </p>
            <p class="text-gray-600 leading-relaxed">
              We believe that your home should reflect your personality. That’s
              why we curate a wide range of furniture collections, from modern
              minimalism to timeless classics, ensuring there’s something for
              every taste and budget.
            </p>
          </div>
          <!-- Image -->
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Furniture Haven Store"
              class="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-gray-100 text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Mission -->
          <div class="text-center">
            <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed max-w-md mx-auto">
              To inspire and empower our customers to create spaces they love by
              offering stylish, affordable, and sustainable furniture solutions.
            </p>
          </div>
          <!-- Vision -->
          <div class="text-center">
            <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed max-w-md mx-auto">
              To be the leading furniture destination, known for quality,
              innovation, and exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section class="py-16 bg-white text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Team Member 1"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <h4 class="text-xl font-medium">John Doe</h4>
            <p class="text-gray-500">Founder & CEO</p>
            <p class="text-gray-600 mt-2">
              John leads with a vision to make furniture shopping a delightful
              experience for all.
            </p>
          </div>
          <!-- Team Member 2 -->
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Team Member 2"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <h4 class="text-xl font-medium">Jane Smith</h4>
            <p class="text-gray-500">Head of Design</p>
            <p class="text-gray-600 mt-2">
              Jane curates our collections, ensuring every piece is both stylish
              and functional.
            </p>
          </div>
          <!-- Team Member 3 -->
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Team Member 3"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <h4 class="text-xl font-medium">Michael Brown</h4>
            <p class="text-gray-500">Customer Experience Lead</p>
            <p class="text-gray-600 mt-2">
              Michael ensures every customer has a seamless and satisfying
              shopping journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gray-900 text-white text-center">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl font-semibold mb-4">
          Ready to Transform Your Home?
        </h2>
        <p class="text-gray-300 mb-8 max-w-xl mx-auto">
          Explore our wide range of furniture collections and find the perfect
          pieces for your space.
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
export class AboutComponent {}
