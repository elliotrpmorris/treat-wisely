import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [{ title: "Slide 1" }, { title: "Slide 2" }, { title: "Slide 3" }];

  addSlide() {
    this.items.push({
      title: `Slide 4`,
    });
  }
}
