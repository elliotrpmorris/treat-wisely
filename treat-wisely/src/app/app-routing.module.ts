import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
