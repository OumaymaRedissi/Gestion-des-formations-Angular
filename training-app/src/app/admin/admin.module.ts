import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { FakeSessionItemService } from './fake-sessionitem-service.service';


@NgModule({
  declarations: [SessionItemComponent,SessionItemListComponent ,AdminComponent, SessionAddFormComponent, SessionEditFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers:[FakeSessionItemService],
  bootstrap: [AdminComponent],
})
export class AdminModule { }
