import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define the shape of a product
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Use BehaviorSubject to store and share the selected product
  private selectedProductSource = new BehaviorSubject<Product | null>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  // Method to set the selected product
  setSelectedProduct(product: Product) {
    this.selectedProductSource.next(product);
  }

  // Method to clear the selected product (optional, for cleanup)
  clearSelectedProduct() {
    this.selectedProductSource.next(null);
  }
}
