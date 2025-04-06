import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Product Details Section -->
    <section class="py-16 bg-gray-100 text-gray-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- If a product is selected, display its details -->
        <div
          *ngIf="product; else noProduct"
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <!-- Product Image -->
          <div class="flex justify-center">
            <img
              [src]="product.image"
              [alt]="product.name"
              class="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <!-- Product Details -->
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              {{ product.name }}
            </h1>
            <p class="text-2xl text-gray-900 font-semibold mb-4">
              {{ product.price }}
            </p>
            <p class="text-gray-600 mb-6">{{ product.description }}</p>

            <!-- Additional Details -->
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Product Details</h2>
              <p class="text-gray-600">
                <strong>Category:</strong> {{ product.category | titlecase }}
              </p>
              <p class="text-gray-600">
                <strong>Dimensions:</strong> {{ product.dimensions }}
              </p>
            </div>

            <!-- Add to Cart Button -->
            <button
              (click)="addToCart()"
              class="w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <!-- If no product is selected -->
        <ng-template #noProduct>
          <p class="text-center text-gray-600">
            No product selected. Please select a product from the category page.
          </p>
        </ng-template>
      </div>
    </section>
  `,
})
export class ProductDetailsComponent implements OnInit {
  // Variable to store the selected product
  product: any = null;

  // Inject the ProductService
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Subscribe to the selected product from the service
    this.productService.selectedProduct$.subscribe((product) => {
      this.product = product;
    });
  }

  // Placeholder method for Add to Cart functionality
  addToCart() {
    alert(
      'Added to Cart! (This is a placeholder - cart functionality will be added later)'
    );
    // In the future, you can implement the actual cart logic here
  }
}
