import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // personalInformation2: string = "01 Jan 1900";
  personalInformation: any[] = [{
    "website": "https://castrosoft.github.io/portfolio/",
    "city": "Cordoba, ARG",
    "degree": "University",
    "phEmailone": "cp.castropedro@gmail.com",
    "freelance": "Available"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
