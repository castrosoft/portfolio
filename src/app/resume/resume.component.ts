import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  personalInformation: any[] = [{
    "fcefyn": " https://fcefyn.unc.edu.ar/facultad/secretarias/academica/escuelas/ingenieria-computacion/ingenieria-en-computacion/"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
