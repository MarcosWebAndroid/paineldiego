import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertempresaComponent } from './insertempresa.component';

describe('InsertempresaComponent', () => {
  let component: InsertempresaComponent;
  let fixture: ComponentFixture<InsertempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
