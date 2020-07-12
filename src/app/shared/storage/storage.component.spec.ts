import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {StorageComponent} from './storage.component';
import {MeasurementUnitPipe} from '../pipe/measurement-unit/measurement-unit.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

describe('StorageComponent', () => {
  let fixture: ComponentFixture<StorageComponent>;
  let component: StorageComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatProgressBarModule],
      declarations: [ StorageComponent, MeasurementUnitPipe ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should calculate percents', () => {
    component.total = 300000;
    component.used = 75000;

    expect(component.usedInPercent).toBe(25);
  });

  it('should be "0" percents if has no input data', () => {
    expect(component.usedInPercent).toBe(0);
  });
});
