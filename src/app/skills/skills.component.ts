import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [{
    "jira": 90,
    "postman": 90,
    "git": 75,
    "jenkins": 60,
    "sql": 90,
    "noSql": 60,
    "sftp": 70,
    "log": 80
    
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
