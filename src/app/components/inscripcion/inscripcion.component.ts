import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  formInscripcion = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    carrera: new FormControl('', [Validators.required]),
    actividad: new FormControl('', [Validators.required]),
    jornada: new FormControl('', [Validators.required]),
    comentario: new FormControl('')
  });

  enviarSolicitud() {
    if (this.formInscripcion.valid) {
      console.log('Solicitud enviada:', this.formInscripcion.value);
      alert('¡Solicitud de inscripción registrada con éxito!');
      this.formInscripcion.reset();
    } else {
      alert('Debe completar correctamente los campos obligatorios.');
      this.formInscripcion.markAllAsTouched();
    }
  }
}