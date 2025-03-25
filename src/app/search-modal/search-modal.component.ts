import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  template: `
    <div
      class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md pointer-events-auto"
      >
        <h2 class="text-2xl font-bold text-amber-600 mb-4">Search Furniture</h2>
        <input
          type="text"
          placeholder="Enter search term (e.g., sofa, table)"
          class="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <div class="flex justify-end space-x-2">
          <button
            (click)="close()"
            class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            (click)="search()"
            class="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SearchModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() searchQuery = new EventEmitter<string>();

  close() {
    this.closeModal.emit();
  }

  search() {
    const input = document.querySelector('input') as HTMLInputElement;
    if (input.value) {
      this.searchQuery.emit(input.value);
      this.close();
    }
  }
}
