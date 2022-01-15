import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-sessionitem-service.service';

@Component({
  selector: 'app-admin',
  providers: [FakeSessionItemService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
