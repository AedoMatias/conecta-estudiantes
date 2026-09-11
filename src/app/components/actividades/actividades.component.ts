import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  standalone: true,
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent {
  actividades = [
    { nombre: 'Taller de Programación Web', descripcion: 'Desarrollo de aplicaciones SPA con Angular 22.', horario: 'Lunes 15:00 hrs' },
    { nombre: 'Taller de Robótica e IoT', descripcion: 'Programación de microcontroladores y sensores.', horario: 'Martes 10:00 hrs' },
    { nombre: 'Club de Debate y Oratoria', descripcion: 'Desarrollo de habilidades de argumentación.', horario: 'Miércoles 16:00 hrs' },
    { nombre: 'Seminario de Inteligencia Artificial', descripcion: 'Introducción a modelos de lenguaje y automatización.', horario: 'Jueves 14:00 hrs' }
  ];
}