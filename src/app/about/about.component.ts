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
    "city": "Córdoba, ARG",
    "email": "cp.castropedro@gmail.com",
    "linkedin": "https://www.linkedin.com/in/cp-castropedro/",
    "github": "https://github.com/castrosoft"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
