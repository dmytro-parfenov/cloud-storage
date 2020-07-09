import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SortType} from '../shared/sort/sort-type.enum';
import {SortParams} from '../shared/sort/sort-params';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'cs-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingComponent implements OnInit, OnDestroy {

  @Input() set sortParams(sortParams: SortParams | null) {
    if (!sortParams) {
      return;
    }

    this.form.get('type')?.setValue(sortParams.type, {emitEvent: false});
  }

  @Output() sortParamsChange = new EventEmitter<SortParams>();

  form = this.buildForm();

  private destroy$ = new Subject<void>();

  readonly types = [
    SortType.Name,
    SortType.Size,
    SortType.LastModifiedDate,
  ];

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      tap(this.onChangeSortParams.bind(this)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private onChangeSortParams(sortParams: Partial<SortParams>): void {
    if (sortParams.type) {
      this.sortParamsChange.emit(new SortParams({type: sortParams.type}));
    }
  }

  private buildForm(sortParams: SortParams = new SortParams()): FormGroup {
    return this.formBuilder.group({
      type: [sortParams.type],
    });
  }

}
