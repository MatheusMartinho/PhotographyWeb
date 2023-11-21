import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProgrammingComponent } from './programming/programming.component';
import { NewGalleryComponent } from './new-gallery/new-gallery.component';
import { NavGalleryComponent } from './nav-gallery/nav-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'programming', component: ProgrammingComponent},
  { path: 'new-gallery', component: NewGalleryComponent},
  { path: 'nav-gallery', component: NavGalleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
