import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../user-list/user';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    gender: new FormControl(''),
  });

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  clearForm() {
    this.profileForm.reset();
  }

  async registerUser() {
    const newUserData = this.profileForm.value as User;
    try {
      const user = await this.userService.addUser({...newUserData});
      this.clearForm();
    } catch (err) {
      console.log('Falha ao registrar');
    }
  }

}
