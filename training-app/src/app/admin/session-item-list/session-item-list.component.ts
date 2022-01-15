import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';
import { Session } from '../session';
@Component({
selector: 'app-session-item-list',
templateUrl: './session-item-list.component.html',
styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
sessionItems: Session[] | undefined ;
constructor(private sessionItemService: FakeSessionItemService) { }
ngOnInit() {
    this.sessionItems = this.sessionItemService.get();
}
}