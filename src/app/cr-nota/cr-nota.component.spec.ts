import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrNotaComponent } from './cr-nota.component';

describe('CrNotaComponent', () => {
  let component: CrNotaComponent;
  let fixture: ComponentFixture<CrNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
