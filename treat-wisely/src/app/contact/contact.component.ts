import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    type: new FormControl(""),
    message: new FormControl(""),
  });

  onSubmit() {
    const body = new HttpParams()
      .set("form-name", "contact")
      .append("name", this.contactForm.value.name)
      .append("email", this.contactForm.value.email)
      .append("type", this.contactForm.value.type)
      .append("message", this.contactForm.value.message);
    this.http
      .post("/", body.toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .subscribe(
        (res) => {},
        (err) => {
          if (err instanceof ErrorEvent) {
            //client side error
            alert("Something went wrong when sending your message.");
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              alert("Your message has been sent!");
            } else {
              alert("Something went wrong when sending your message.");
              console.log("Error status:");
              console.log(err.status);
              console.log("Error body:");
              console.log(err.error);
            }
          }
        }
      );
  }
}
