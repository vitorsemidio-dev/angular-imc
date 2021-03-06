import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { HeightPipe } from './user-list/user-detail/height.pipe';
import { WeightPipe } from './user-list/user-detail/weight.pipe';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserService } from './user-list/user.service';
import { ImcPipe } from './user-list/user-detail/imc.pipe';
import { ImcHighlightDirective } from './user-list/user-detail/imc-highlight.directive';
import { ListFormFilterComponent } from './user-list/list-form-filter/list-form-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    HeightPipe,
    WeightPipe,
    CreateUserComponent,
    ImcPipe,
    ImcHighlightDirective,
    ListFormFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
