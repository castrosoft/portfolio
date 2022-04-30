import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // personalInformation2: string = "10 Apr 1991";
  personalInformation: any[] = [{
    "birthday": "10 Apr 1991",
    "website": "https://castrosoft.github.io/portfolio/",
    "phone": "+59 3544 445189",
    "city": "Cordoba, ARG",
    "age": "30",
    "degree": "University",
    "phEmailone": "cp.castropedro@gmail.com",
    "freelance": "Available"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
