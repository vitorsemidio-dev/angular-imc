import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-form-filter',
  templateUrl: './list-form-filter.component.html',
  styleUrls: ['./list-form-filter.component.scss']
})
export class ListFormFilterComponent implements OnInit {
  @Output() filterEmitter: EventEmitter<string> = new EventEmitter();

  filterUserForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    imcStatus: new FormControl([]),
  });

  levels = [
    { id: 1, imcStatus: 'Magreza' },
    { id: 2, imcStatus: 'Saudável' },
    { id: 3, imcStatus: 'Sobrepeso' },
    { id: 4, imcStatus: 'Obesidade I' },
    { id: 5, imcStatus: 'Obesidade II (severa)' },
    { id: 6, imcStatus: 'Obesidade III (morbida)' },
  ];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  handleFilter() {
    this.filterEmitter.emit(this.filterUserForm.value);
  }
}
