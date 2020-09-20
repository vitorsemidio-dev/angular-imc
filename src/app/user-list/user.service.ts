import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USER_MOCK;

  constructor() { }

  getUsers() {
    return Promise.resolve(this.users);
  }

  addUser({ name, height, weight, gender}: User) {
    const user: User = Object.assign({}, { name, height, weight, gender });
    return Promise.resolve(user);
  }
}

export const USER_MOCK: User[] = [
  { name: 'Ana Carolina', height: 1.57, weight: 62.3, gender: 'F' },
  { name: 'Carol Fernandes', height: 1.77, weight: 92.3, gender: 'F' },
  { name: 'Pedro Silva', height: 1.60, weight: 79.3, gender: 'M' },
  { name: 'Henrique da Silva', height: 1.67, weight: 75.3, gender: 'M' },
  { name: 'Vitor dos Santos', height: 1.55, weight: 69.3, gender: 'M' },
  { name: 'João Vitor', height: 1.72, weight: 55.5, gender: 'M' },
  { name: 'Vitória Maria', height: 1.71, weight: 84.7, gender: 'F' },
  { name: 'Bruno Santana', height: 1.80, weight: 80.0, gender: 'M' },
  { name: 'Débora Fernandes', height: 1.48, weight: 79.7, gender: 'F' },
  { name: 'Fernanda da Silva', height: 1.45, weight: 65.8, gender: 'F' },
  { name: 'João Pedro', height: 1.69, weight: 66.3, gender: 'M' },
  { name: 'Carolina Freita', height: 1.59, weight: 105.3, gender: 'F' },
  { name: 'Ana Beatriz', height: 1.87, weight: 62.3, gender: 'F' },
  { name: 'Rafael da Silva', height: 1.82, weight: 82.3, gender: 'M' },
  { name: 'Pedro Henrique', height: 1.77, weight: 62.3, gender: 'M' },
];
