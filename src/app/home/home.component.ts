import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  paragraph = 'Front-End Angular\n Developer &\n Photographer';
  description = "Hi, I'm Matheus Martinho. A passionate Front-end Angular Developer &\n photographer. Based in São Paulo, Brazil";
  linkedinUrl = 'https://br.linkedin.com/in/matheus-moura-martinho-8630091b3';
  githubUrl = 'https://github.com/MatheusMartinho';

  icons = [
    {logo: 'fa-brands fa-js'},
    {logo: "fa-brands fa-html5"},
    {logo: "fa-brands fa-css3-alt"},
    {logo: "fa-brands fa-angular"},
    {logo: "fa-brands fa-sass"}
  ]
}
