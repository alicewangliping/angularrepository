import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
  AppComponent,
  BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
