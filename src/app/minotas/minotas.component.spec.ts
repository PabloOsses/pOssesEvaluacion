import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinotasComponent } from './minotas.component';

describe('MinotasComponent', () => {
  let component: MinotasComponent;
  let fixture: ComponentFixture<MinotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
