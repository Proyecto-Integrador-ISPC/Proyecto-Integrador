import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoguinComponent } from './pages/loguin/loguin.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"productos", component:ProductosComponent},
    {path:"loguin", component:LoguinComponent},
    {path:"registro", component:RegistroComponent},
    {path:"carrito", component:CarritoComponent},
    {path:"compras", component:ComprasComponent},
    {path:"dashboard", component:DashboardComponent}
];
