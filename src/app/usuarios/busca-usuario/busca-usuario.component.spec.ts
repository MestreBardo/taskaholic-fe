import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaUsuarioComponent } from './busca-usuario.component';

describe('BuscaUsuarioComponent', () => {
  let component: BuscaUsuarioComponent;
  let fixture: ComponentFixture<BuscaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
