import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '**', redirectTo: 'inicio' }
];