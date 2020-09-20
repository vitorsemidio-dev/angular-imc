import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { HeightPipe } from './user-list/user-detail/height.pipe';
import { WeightPipe } from './user-list/user-detail/weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    HeightPipe,
    WeightPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
