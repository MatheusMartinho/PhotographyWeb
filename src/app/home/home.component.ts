import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Front-End Angular';
  occupation = 'Developer & Photographer';
  description = "Hi, I'm Matheus Martinho. A passionate Front-end Angular Developer & photographer. Based in Sao Paulo, Brazil";
  linkedinUrl = 'https://br.linkedin.com/in/matheus-moura-martinho-8630091b3';
  githubUrl = 'https://github.com/MatheusMartinho';
}
