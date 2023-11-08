import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddpostComponent } from './editaddpost.component';

describe('EditaddpostComponent', () => {
  let component: EditaddpostComponent;
  let fixture: ComponentFixture<EditaddpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
