import {SortingOrderComponent} from './sorting-order.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SortOrder} from '../../shared/sort/sort-order.enum';
import {By} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'cs-host',
  template: `
    <form [formGroup]="form">
      <cs-sorting-order formControlName="order"></cs-sorting-order>
    </form>
  `
})
class HostComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      order: [SortOrder.Asc]
    });
  }
}

describe('SortingOrderComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;
  let debugElement: DebugElement;
  let component: SortingOrderComponent;
  let formControl: AbstractControl | null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatIconModule],
      declarations: [ HostComponent, SortingOrderComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('cs-sorting-order'));
    component = debugElement.componentInstance;
    formControl = host.form.get('order');

    fixture.detectChanges();
  });

  it('should reflects initial value', () => {
    expect(component.value$.getValue()).toBe(SortOrder.Asc);
    expect(formControl?.value).toBe(SortOrder.Asc);
  });

  it('should change the value by using the form control', () => {
    formControl?.setValue(SortOrder.Desc);

    expect(component.value$.getValue()).toBe(SortOrder.Desc);
    expect(formControl?.value).toBe(SortOrder.Desc);
  });

  it('should change the value by clicking on component', () => {
    const prevValue = component.value$.getValue();

    debugElement.nativeElement.click();

    expect(component.value$.getValue()).not.toBe(prevValue);
    expect(formControl?.value).not.toBe(prevValue);
  });

  it('should be disabled', () => {
    formControl?.disable();

    expect(formControl?.disabled).toBeTrue();
    expect(component.disabled$.getValue()).toBeTrue();
  });

  it('should not change the value by clicking on component when disabled', () => {
    const prevValue = formControl?.value;

    formControl?.disable();

    debugElement.nativeElement.click();

    expect(formControl?.value).toBe(prevValue);
    expect(component.value$.getValue()).toBe(prevValue);
  });
});
