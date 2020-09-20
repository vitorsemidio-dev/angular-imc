import { Injectable } from '@angular/core';

import { User } from './user';

interface FilterOption {
  name?: string;
  imcStatus?: number[];
  gender?: 'M' | 'F';
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = Object.assign([], USER_MOCK);

  private levels = [
    { id: 1, imcStatus: 'Magreza' },
    { id: 2, imcStatus: 'Saudável' },
    { id: 3, imcStatus: 'Sobrepeso' },
    { id: 4, imcStatus: 'Obesidade I' },
    { id: 5, imcStatus: 'Obesidade II (severa)' },
    { id: 6, imcStatus: 'Obesidade III (morbida)' },
  ];

  constructor() { }

  getUsers() {
    return Promise.resolve(this.users);
  }

  addUser({ name, height, weight, gender }: User) {
    const user: User = Object.assign({}, { name, height, weight, gender });
    this.users.push(user);
    return Promise.resolve(user);
  }

  filter(filterOptions: FilterOption) {
    const { name, gender, imcStatus } = filterOptions;
    const users = this.users.filter(user =>
      this.filterByName(user, name) || this.filterByGender(user, gender) ||
      this.filterByStatus(user, imcStatus)
    );
    return Promise.resolve(users);
  }

  private filterByName(user: User, name: string) {
    if (!name) {
      return false;
    }
    const result = user.name.indexOf(name) > -1;
    return result;
  }

  private filterByGender(user: User, gender: 'M' | 'F' | undefined) {
    if (!gender) {
      return false;
    }
    const result = user.gender.indexOf(gender) > -1;
    return result;
  }

  private getStatus(imc: number) {
    if (imc < 18.5) {
      return 1;
    } else if (imc < 24.9) {
      return 2;
    } else if (imc < 29.9) {
      return 3;
    } else if (imc < 34.9) {
      return 4;
    } else if (imc < 39.9) {
      return 5;
    } else {
      return 6;
    }
  }

  private filterByStatus(user: User, status: number[]) {
    if (!status || status.length === 0) {
      return false;
    }
    const { height, weight } = user;
    const imc = (weight / (height * height));
    const statusImc = this.getStatus(imc);
    return status.includes(statusImc);
  }

}

export const USER_MOCK: User[] = [
  { name: 'Ana Carolina', height: 1.57, weight: 62.3, gender: 'F' },
  { name: 'Carol Fernandes', height: 1.77, weight: 92.3, gender: 'F' },
  { name: 'Pedro Silva', height: 1.60, weight: 79.3, gender: 'M' },
  { name: 'Henrique da Silva', height: 1.67, weight: 75.3, gender: 'M' },
  { name: 'Vitor dos Santos', height: 1.55, weight: 69.3, gender: 'M' },
  { name: 'João Vitor', height: 0.72, weight: 5.5, gender: 'M' },
  { name: 'Vitória Maria', height: 1.71, weight: 84.7, gender: 'F' },
  { name: 'Bruno Santana', height: 1.80, weight: 80.0, gender: 'M' },
  { name: 'Débora Fernandes', height: 1.48, weight: 79.7, gender: 'F' },
  { name: 'Fernanda da Silva', height: 1.45, weight: 65.8, gender: 'F' },
  { name: 'João Pedro', height: 1.69, weight: 66.3, gender: 'M' },
  { name: 'Carolina Freita', height: 1.59, weight: 105.3, gender: 'F' },
  { name: 'Ana Beatriz', height: 0.87, weight: 6.3, gender: 'F' },
  { name: 'Rafael da Silva', height: 1.82, weight: 82.3, gender: 'M' },
  { name: 'Pedro Henrique', height: 1.77, weight: 62.3, gender: 'M' },
];
