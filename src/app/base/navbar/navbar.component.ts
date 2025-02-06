import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { MatIcon } from '@angular/material/icon';
import { ButtonDirective } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [MenubarModule, MenuModule, ButtonDirective, MatIcon]
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  isDesktop: boolean = true;

  @ViewChild('menuPopup') menuPopup!: Menu;

  constructor() {
    this.items = [
      { label: 'Planetas', icon: 'pi pi-box', url: '/planetas', target: "_self" },
      { label: 'Otros', icon: 'pi pi-tags', url: '/others', target: "_self" }
    ]
  }

  ngOnInit(): void {
    const savedIsDesktop = localStorage.getItem('isDesktop');
    this.isDesktop = savedIsDesktop ? JSON.parse(savedIsDesktop) : window.innerWidth > 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const isDesktopNow = window.innerWidth > 1024;
    if (this.isDesktop !== isDesktopNow) {
      this.isDesktop = isDesktopNow;
      localStorage.setItem('isDesktop', JSON.stringify(this.isDesktop));
    }
  }

}
