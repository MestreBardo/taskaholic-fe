import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReistraSuarioComponent } from './reistra-suario.component';

describe('ReistraSuarioComponent', () => {
  let component: ReistraSuarioComponent;
  let fixture: ComponentFixture<ReistraSuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReistraSuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReistraSuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
