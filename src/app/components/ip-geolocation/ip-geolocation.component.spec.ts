import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpGeolocationComponent } from './ip-geolocation.component';

describe('IpGeolocationComponent', () => {
  let component: IpGeolocationComponent;
  let fixture: ComponentFixture<IpGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpGeolocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
