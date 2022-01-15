import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


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
  @Input() name : string ;
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor() { this.name=''; 
 
}

  ngOnInit(): void {
  }
  onDelete(){
    console.log(this.session);
    
  }
  inscrire(){
    console.log('Nouvelle Inscription .. ');
    this.session.participants = +this.session.participants + 1 ;
    console.log(this.session.participants + 'Participants');
    this.participantsChange.emit({
      value : this.session.participants
    });
    if (this.session.participants >= 20) {
      this.session.isCompleted = true;
    }
  
  }

}
