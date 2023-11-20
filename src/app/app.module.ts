import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ProgrammingComponent } from './programming/programming.component';
import { SetupComponent } from './setup/setup.component';
import { NavGalleryComponent } from './nav-gallery/nav-gallery.component';
import { NewGalleryComponent } from './new-gallery/new-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent,
    ProgrammingComponent,
    SetupComponent,
    NavGalleryComponent,
    NewGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Include this in your imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
