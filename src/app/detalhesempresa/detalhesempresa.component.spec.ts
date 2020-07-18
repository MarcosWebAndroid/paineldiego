import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesempresaComponent } from './detalhesempresa.component';

describe('DetalhesempresaComponent', () => {
  let component: DetalhesempresaComponent;
  let fixture: ComponentFixture<DetalhesempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
