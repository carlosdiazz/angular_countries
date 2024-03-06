import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }

  ngOnInit(): void {
    console.log('Se suscribio');
    this.debouncerSuscription = this.debouncer
      .pipe(
        //Con esta funcion espero un segundo antes de continuar,
        debounceTime(300)
      )
      .subscribe((value) => {
        console.log('Value =>', value);
        this.onDebounce.emit(value);
      });
  }

  //Cuando se destruye el servicio
  ngOnDestroy(): void {
    console.log('Se destruyo');
    this.debouncerSuscription?.unsubscribe();
  }
}
