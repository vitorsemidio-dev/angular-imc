import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USER_MOCK;

  constructor() { }
}

export const USER_MOCK: User[] = [

];
