import { Component, OnInit } from '@angular/core';

interface User {
  name: string,
  surname: string,
  image: string,
  description: string,
  skills: Array<string>
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  user: User = {
    name: 'Elliot',
    surname: 'Alderson',
    image: 'https://cde.laprensa.e3.pe/ima/0/0/2/3/7/237139.jpg',
    description: 'Elliot es una persona introvertida, socialmente incómoda, que tiene mucho odio, principalmente hacia la sociedad en la que no puede participar. Sufre de ansiedad, lo que le dificulta participar en situaciones sociales.',
    skills: [
    'Ingeniería social',
    'Kali Linux'
    ],
  }

  skillsText: string = '';

  constructor() { }

  ngOnInit() {
    this.skillsText = this.getSkills();
  }

  getSkills(): string {
    return this.user.skills.join(', ');
  }

  addSkills() {
    this.user.skills = this.skillsText.split(', ')
  }

}
