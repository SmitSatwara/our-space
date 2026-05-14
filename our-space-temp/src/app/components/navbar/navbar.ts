import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isOpen = false;
  isCreateOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleCreate() {
    this.isCreateOpen = !this.isCreateOpen;
  }

  onCreate(type: string) {
    console.log('Create:', type);
    this.isCreateOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.create-dropdown')) {
      this.isCreateOpen = false;
    }
  }
}