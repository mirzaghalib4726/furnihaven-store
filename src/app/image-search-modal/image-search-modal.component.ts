import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-search-modal',
  standalone: true,
  template: `
    <div
      class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md pointer-events-auto"
      >
        <h2 class="text-2xl font-bold text-amber-600 mb-4">Image Search</h2>
        <div class="relative mb-4">
          <input
            type="file"
            accept="image/*"
            (change)="onFileSelected($event)"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="imageUpload"
          />
          <label
            for="imageUpload"
            class="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 flex items-center justify-between cursor-pointer hover:bg-gray-100"
          >
            <span>Choose an Image</span>
            <svg
              class="w-5 h-5 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
          </label>
        </div>
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
export class ImageSearchModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() imageSelected = new EventEmitter<File>();

  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  close() {
    this.closeModal.emit();
  }

  search() {
    if (this.selectedFile) {
      this.imageSelected.emit(this.selectedFile);
      this.close();
    }
  }
}
