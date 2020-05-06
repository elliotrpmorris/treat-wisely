import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
})
export class AppModule {}
