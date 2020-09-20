import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormFilterComponent } from './list-form-filter.component';

describe('ListFormFilterComponent', () => {
  let component: ListFormFilterComponent;
  let fixture: ComponentFixture<ListFormFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
