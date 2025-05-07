import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule, Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-login',
  standalone: true,
  imports: [ButtonModule, MenuModule, RouterLink],
  templateUrl: './nav-bar-login.component.html',
  styleUrl: './nav-bar-login.component.css'
})

export class NavBarLoginComponent {
  @ViewChild('menu') menu!: Menu;

  constructor (private router: Router) {}

  items: MenuItem[] = [
    { 
      label: 'Estudiante',
      icon: 'pi pi-user',
      command: () => this.router.navigate(['./login/student'])  // Ruta a redirigir
    },
    { label: 'Empresa', 
      icon: 'pi pi-briefcase',
      command: () => this.router.navigate(['./login/company'])  }
  ];

  onButtonClick(event: MouseEvent) {
    this.menu.toggle(event);
  }
}
