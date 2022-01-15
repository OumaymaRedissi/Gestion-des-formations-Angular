import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addSession(sessionItem: NgForm):void {
  console.log("Logs...."+JSON.stringify(sessionItem.value));
  }

}
