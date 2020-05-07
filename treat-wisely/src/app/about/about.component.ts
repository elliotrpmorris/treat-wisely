import { Component, OnInit, ViewChild } from "@angular/core";
import { Slide } from "../carousel/carousel.interface";
import { AnimationType } from "../carousel/carousel.animations";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale,
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox,
    },
  ];
  slides: Slide[] = [
    {
      headline: "Image One",
      src: "../../assets/about_one.png",
    },
    {
      headline: "Image Two",
      src: "../../assets/about_two.png",
    },
    {
      headline: "Image Three",
      src: "../../assets/about_three.png",
    },
  ];

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
