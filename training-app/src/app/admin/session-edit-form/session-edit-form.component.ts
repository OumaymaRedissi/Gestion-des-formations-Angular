import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';
import { Session } from '../session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id: number = 0;
  private sub: any;
  session:any;
  tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService) { }
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
  this.id = params['id']; // (+) converts string 'id' to a number
  });
  console.log('Session ID ' + this.id.toString());
  this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: Session) {
  console.log(sessionItem);
  }

}
