import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  template: `
    <p>
      people-list works!
    </p>
    <ul>
    	<li *ngFor="let person of people">
    	 {{person.name}}
    	</li>
    </ul>
  `,
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Person [] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];

  constructor() { }

  ngOnInit() {
  }

}
