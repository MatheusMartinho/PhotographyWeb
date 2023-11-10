import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  showFooter = false;

  images = [
    { src: 'assets/images/background-about.png', alt: 'Descrição da imagem 1' },
    { src: 'assets/images/dog.jpg', alt: 'Descrição da imagem 1' },
    { src: 'assets/images/body.jpg', alt: 'Descrição da imagem 2' },
    { src: 'assets/images/eagle.jpg', alt: 'Descrição da imagem 3' },
    { src: 'assets/images/mountain1.jpg', alt: 'Descrição da imagem 4' },
    { src: 'assets/images/whistler.jpg', alt: 'Descrição da imagem 5' },
    { src: 'assets/images/abyss.jpg', alt: 'Descrição da imagem 6' },
    { src: 'assets/images/mountain2.jpg', alt: 'Descrição da imagem 7' },
    { src: 'assets/images/moose.jpg', alt: 'Descrição da imagem 8' },
    { src: 'assets/images/bro.jpg', alt: 'Descrição da imagem 9' },
    { src: 'assets/images/lina2.jpg', alt: 'Descrição da imagem 10' },
    { src: 'assets/images/edmonton.jpg', alt: 'Descrição da imagem 11' },
    { src: 'assets/images/sir.jpg', alt: 'Descrição da imagem 12' },
    { src: 'assets/images/martin.jpg', alt: 'Descrição da imagem 13' },
    { src: 'assets/images/me.jpg', alt: 'Descrição da imagem 14' },
    { src: 'assets/images/martin2.jpg', alt: 'Descrição da imagem 15' },
    { src: 'assets/images/aurora.jpg', alt: 'Descrição da imagem 16' },
    { src: 'assets/images/lake.jpg', alt: 'Descrição da imagem 17' },
    { src: 'assets/images/tekara.jpg', alt: 'Descrição da imagem 18' },
    { src: 'assets/images/bowlake.jpg', alt: 'Descrição da imagem 19' },
    { src: 'assets/images/peyto.jpg', alt: 'Descrição da imagem 20' },
    { src: 'assets/images/bird.JPG', alt: 'Descrição da imagem 21' },
    { src: 'assets/images/elk.jpg', alt: 'Descrição da imagem 22' },
    { src: 'assets/images/jasper.jpg', alt: 'Descrição da imagem 23' },
    { src: 'assets/images/moon.jpg', alt: 'Descrição da imagem 24' },
    { src: 'assets/images/lina.jpg', alt: 'Descrição da imagem 25' },
    { src: 'assets/images/caragua.jpg', alt: 'Descrição da imagem 26' },
    { src: 'assets/images/wave.jpg', alt: 'Descrição da imagem 27' },
    { src: 'assets/images/truck.jpg', alt: 'Descrição da imagem 27' },
    { src: 'assets/images/road.jpg', alt: 'Descrição da imagem 27' },
    { src: 'assets/images/golf.jpg', alt: 'Descrição da imagem 27' },
    { src: 'assets/images/mountain3.jpg', alt: 'Descrição da imagem 27' },
  ];

  lightboxOpen = false;
  currentIndex = 0;

  openLightbox(index: number): void {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  moveInLightbox(direction: number): void {
    this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
  }
}
