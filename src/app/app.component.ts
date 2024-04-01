import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'app-bancaria';
  public routeActual: string = "";

  constructor(
    private router: Router
  )
  {};

  get isLoginPage(): boolean {
    // Verificar si la URL actual es la página de inicio de sesión
    if(this.router.url === '/login' || this.router.url === '/signup'){
      return true;
    }
    else{
      return false;
    }
  }
}
