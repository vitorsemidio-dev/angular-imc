import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  async carregarUsuarios() {
    const users = await this.userService.getUsers();
    this.users = users;
  }

}