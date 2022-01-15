import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit() {
  }
  addSession(sessionItem: Session) {
  console.log(sessionItem);
  this.sessionItemService.add(sessionItem);
  }

}
