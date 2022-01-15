import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  //name='Formation Web';
  alignement='right';
  couleur = 'red';
  session_name='Formation Web';
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor(private sessionItemService:FakeSessionItemService) { }
 
  ngOnInit(): void {
  }
  onDelete(){
    console.log(this.session);
    this.sessionItemService.delete(this.session);
    
  }

}
