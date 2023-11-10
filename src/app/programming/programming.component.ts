import { Component } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css'],

})
export class ProgrammingComponent {
  skills = [
    { name: 'JavaScript', level: 90, logo: '/assets/images/programmingLogo/js.png' },
    { name: 'Python', level: 75, logo: '/assets/images/programmingLogo/python.png' },
    { name: 'Typescript', level: 75, logo: '/assets/images/programmingLogo/ts.png' },
    { name: 'Css', level: 75, logo: '/assets/images/programmingLogo/css.png' },
    { name: 'Html', level: 75, logo: '/assets/images/programmingLogo/html.png' },
    { name: 'Angular', level: 75, logo: '/assets/images/angular.png' },
    // Add more skills here
  ];

  setup = [
    { image: '/assets/images/programmingLogo/rtx.png', title: 'Placa De video', description: 'NVIDIA GeForce RTX 2070' },
    { image: '/assets/images/programmingLogo/core.png', title: 'Processador', description: 'Ryzen 5 3600' },
    { image: '/assets/images/programmingLogo/alien.png', title: 'Monitor', description: 'Monitor Alienware 240hz' },
    { image: '/assets/images/programmingLogo/keyboard.png', title: 'Teclado', description: 'Motospeed' },
    { image: '/assets/images/programmingLogo/ram.png', title: 'Memoria Ram', description: '16ram DDR4' },
    // ... additional setup items ...
  ];
}

