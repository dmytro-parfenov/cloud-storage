import {ChangeDetectionStrategy, Component, forwardRef, HostListener, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SortOrder} from '../../shared/sort/sort-order.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'cs-sorting-order',
  templateUrl: './sorting-order.component.html',
  styleUrls: ['./sorting-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortingOrderComponent),
      multi: true
    }
  ]
})
export class SortingOrderComponent implements OnInit, ControlValueAccessor {

  readonly value$ = new BehaviorSubject<SortOrder | null>(null);

  readonly disabled$ = new BehaviorSubject<boolean>(false);

  readonly controlIcon$: Observable<string> = this.value$.pipe(
    map(value => value === SortOrder.Desc ? 'arrow_circle_up' : 'arrow_circle_down')
  );

  /**
   * Function to call when the value changes
   */
  private onChange = (value: SortOrder) => {};

  /**
   * Function to call when the control is touched
   */
  private onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @inheritDoc
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * @inheritDoc
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * @inheritDoc
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled$.next(isDisabled);
  }

  /**
   * @inheritDoc
   */
  writeValue(value: SortOrder): void {
    this.value$.next(value);
    this.onChange(value);
    this.onTouched();
  }

  @HostListener('click')
  private toggle(): void {
    if (this.disabled$.getValue()) {
      return;
    }

    this.writeValue(this.value$.getValue() === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc);
  }

}
