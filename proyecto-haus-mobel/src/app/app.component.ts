import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FoorterComponent } from './shared/foorter/foorter.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


import { LoguinComponent } from './pages/loguin/loguin.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FoorterComponent, ProductosComponent, LoguinComponent, NgbModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-haus-mobel';
}