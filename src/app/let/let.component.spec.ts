import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetRowComponent } from './let.component';

describe('LetComponent', () => {
  let component: LetRowComponent;
  let fixture: ComponentFixture<LetRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
