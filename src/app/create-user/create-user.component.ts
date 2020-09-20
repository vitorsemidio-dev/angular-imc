import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  clearForm() {
    this.profileForm.reset();
  }

  registerUser() {
    console.table(this.profileForm.value);
    setTimeout(this.clearForm, 3000);
  }

}
