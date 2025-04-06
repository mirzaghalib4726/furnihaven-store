import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
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
          Explore Our Categories
        </h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Find the perfect furniture for every room in your home with our wide
          range of categories.
        </p>
      </div>
    </section>

    <!-- Categories Grid Section -->
    <section class="py-16 bg-white text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <!-- Category: Sofas -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Sofas"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('sofas')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Sofas
              </button>
            </div>
          </div>

          <!-- Category: Chairs -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1598300046947-48a37ee2330d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Chairs"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('chairs')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Chairs
              </button>
            </div>
          </div>

          <!-- Category: Tables -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Tables"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('tables')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Tables
              </button>
            </div>
          </div>

          <!-- Category: Beds -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Beds"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('beds')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Beds
              </button>
            </div>
          </div>

          <!-- Category: Dressers -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1611269156422-4e7d6e0c63e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Dressers"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('dressers')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Dressers
              </button>
            </div>
          </div>

          <!-- Category: Wardrobes -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Wardrobes"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('wardrobes')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Wardrobes
              </button>
            </div>
          </div>

          <!-- Category: Desks -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Desks"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('desks')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Desks
              </button>
            </div>
          </div>

          <!-- Category: Bookshelves -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Bookshelves"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('bookshelves')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Bookshelves
              </button>
            </div>
          </div>

          <!-- Category: Outdoor Furniture -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Outdoor Furniture"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('outdoor-furniture')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Outdoor Furniture
              </button>
            </div>
          </div>

          <!-- Category: Lighting -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Lighting"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('lighting')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Lighting
              </button>
            </div>
          </div>

          <!-- Category: Rugs -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Rugs"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('rugs')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Rugs
              </button>
            </div>
          </div>

          <!-- Category: Decor -->
          <div class="relative group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Decor"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
            >
              <button
                (click)="selectCategory('decor')"
                class="text-white text-xl font-semibold bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Decor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Category Data Section -->
    <section *ngIf="selectedCategory" class="py-16 bg-gray-100 text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Display the selected category name -->
        <h2 class="text-3xl font-semibold mb-8 text-center">
          {{ selectedCategory | titlecase }}
        </h2>

        <!-- If there are products for the selected category, display them -->
        <div
          *ngIf="
            categoryData[selectedCategory]?.products?.length;
            else noProducts
          "
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <!-- Loop through the products for the selected category -->
            <div
              *ngFor="let product of categoryData[selectedCategory].products"
              class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
              (click)="goToProductDetails(product)"
            >
              <h3 class="text-xl font-medium mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-2">{{ product.description }}</p>
              <p class="text-gray-900 font-semibold">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <!-- If no products are available for the selected category -->
        <ng-template #noProducts>
          <p class="text-center text-gray-600">
            No products available for this category yet. Check back soon!
          </p>
        </ng-template>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gray-900 text-white text-center">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 class="text-3xl font-semibold mb-4">Ready to Redecorate?</h2>
        <p class="text-gray-300 mb-8 max-w-xl mx-auto">
          Browse our collections across all categories and find the perfect
          pieces for your home.
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
})
export class CategoryComponent {
  // Variable to store the currently selected category
  selectedCategory: string | null = null;

  // Inject the ProductService and Router
  constructor(private productService: ProductService, private router: Router) {}

  // Data for each category (hardcoded for simplicity)
  categoryData: {
    [key: string]: {
      products: {
        id: string;
        name: string;
        description: string;
        price: string;
        image: string;
        category: string;
        dimensions?: string;
      }[];
    };
  } = {
    sofas: {
      products: [
        {
          id: 'sofa1',
          name: 'Modern Leather Sofa',
          description:
            'A sleek leather sofa with a minimalist design, perfect for modern living rooms.',
          price: '$799.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'sofas',
          dimensions: '80" W x 35" D x 33" H',
        },
        {
          id: 'sofa2',
          name: 'Velvet Sectional Sofa',
          description:
            'A cozy velvet sectional sofa with tufted cushions, ideal for family gatherings.',
          price: '$1,299.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'sofas',
          dimensions: '90" W x 60" D x 34" H',
        },
      ],
    },
    chairs: {
      products: [
        {
          id: 'chair1',
          name: 'Eames Lounge Chair',
          description:
            'A classic mid-century modern chair with a comfortable leather seat.',
          price: '$499.99',
          image:
            'https://images.unsplash.com/photo-1598300046947-48a37ee2330d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'chairs',
          dimensions: '32" W x 32" D x 33" H',
        },
        {
          id: 'chair2',
          name: 'Dining Chair Set',
          description: 'A set of 4 wooden dining chairs with cushioned seats.',
          price: '$299.99',
          image:
            'https://images.unsplash.com/photo-1598300046947-48a37ee2330d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'chairs',
          dimensions: '18" W x 20" D x 35" H',
        },
      ],
    },
    tables: {
      products: [
        {
          id: 'table1',
          name: 'Marble Coffee Table',
          description: 'A stylish marble-top coffee table with gold accents.',
          price: '$399.99',
          image:
            'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tables',
          dimensions: '48" W x 24" D x 18" H',
        },
        {
          id: 'table2',
          name: 'Extendable Dining Table',
          description:
            'A wooden dining table that extends to seat up to 8 people.',
          price: '$699.99',
          image:
            'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'tables',
          dimensions: '72" W x 36" D x 30" H',
        },
      ],
    },
    beds: {
      products: [
        {
          id: 'bed1',
          name: 'King Platform Bed',
          description: 'A sturdy wooden platform bed with a minimalist design.',
          price: '$899.99',
          image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'beds',
          dimensions: '78" W x 82" D x 40" H',
        },
        {
          id: 'bed2',
          name: 'Upholstered Bed Frame',
          description:
            'A queen-sized bed frame with a plush upholstered headboard.',
          price: '$599.99',
          image:
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'beds',
          dimensions: '62" W x 82" D x 45" H',
        },
      ],
    },
    dressers: {
      products: [
        {
          id: 'dresser1',
          name: '6-Drawer Dresser',
          description:
            'A spacious dresser with 6 drawers, perfect for bedroom storage.',
          price: '$499.99',
          image:
            'https://images.unsplash.com/photo-1611269156422-4e7d6e0c63e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'dressers',
          dimensions: '60" W x 18" D x 34" H',
        },
      ],
    },
    wardrobes: {
      products: [
        {
          id: 'wardrobe1',
          name: 'Sliding Door Wardrobe',
          description:
            'A modern wardrobe with sliding doors and ample storage space.',
          price: '$799.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'wardrobes',
          dimensions: '72" W x 24" D x 80" H',
        },
      ],
    },
    desks: {
      products: [
        {
          id: 'desk1',
          name: 'Minimalist Desk',
          description:
            'A sleek desk with a clean design, ideal for home offices.',
          price: '$299.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'desks',
          dimensions: '48" W x 24" D x 30" H',
        },
      ],
    },
    bookshelves: {
      products: [
        {
          id: 'bookshelf1',
          name: 'Tall Bookshelf',
          description:
            'A tall wooden bookshelf with 5 shelves for books and decor.',
          price: '$399.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'bookshelves',
          dimensions: '36" W x 12" D x 72" H',
        },
      ],
    },
    'outdoor-furniture': {
      products: [
        {
          id: 'outdoor1',
          name: 'Patio Lounge Set',
          description: 'A 4-piece patio set with cushioned chairs and a table.',
          price: '$599.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'outdoor-furniture',
          dimensions: 'Table: 40" W x 24" D x 18" H',
        },
      ],
    },
    lighting: {
      products: [
        {
          id: 'lighting1',
          name: 'Modern Floor Lamp',
          description: 'A sleek floor lamp with an adjustable arm.',
          price: '$199.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'lighting',
          dimensions: '12" W x 12" D x 60" H',
        },
      ],
    },
    rugs: {
      products: [
        {
          id: 'rug1',
          name: 'Bohemian Area Rug',
          description: 'A colorful area rug with a bohemian pattern.',
          price: '$149.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'rugs',
          dimensions: "5' x 7'",
        },
      ],
    },
    decor: {
      products: [
        {
          id: 'decor1',
          name: 'Wall Mirror',
          description: 'A round wall mirror with a gold frame.',
          price: '$99.99',
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          category: 'decor',
          dimensions: '24" Diameter',
        },
      ],
    },
  };

  // Method to handle category selection
  selectCategory(category: string) {
    this.selectedCategory = category;
    // Scroll to the selected category section (optional, for better UX)
    setTimeout(() => {
      const element = document.querySelector('section.bg-gray-100');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  // Method to navigate to product details page
  goToProductDetails(product: any) {
    // Store the selected product in the service
    this.productService.setSelectedProduct(product);

    // Navigate to the product details route in the same tab
    this.router.navigate(['/product-details']);
  }
}
