import { Component } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent {
  setup = [
    { image: '/assets/images/programmingLogo/rtx.png', title: 'Placa De video', description: 'NVIDIA GeForce RTX 2070' },
    { image: '/assets/images/programmingLogo/core.png', title: 'Processador', description: 'Ryzen 5 3600' },
    { image: '/assets/images/programmingLogo/alien.png', title: 'Monitor', description: 'Monitor Alienware 240hz' },
    { image: '/assets/images/programmingLogo/keyboard.png', title: 'Teclado', description: 'Motospeed' },
    { image: '/assets/images/programmingLogo/ram.png', title: 'Memoria Ram', description: '16ram DDR4' },
    // ... additional setup items ...
  ];
}
