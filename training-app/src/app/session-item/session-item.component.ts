import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  name='Formation Web';
  alignement='right';
  couleur='red'

  constructor() { }

  ngOnInit(): void {
  }

}
