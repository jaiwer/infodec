import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-inicio-input',
  templateUrl: './inicio-input.component.html',
  styleUrls: ['./inicio-input.component.css']
})
export class InicioInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  placeholder: string = 'buscar';

  debouncer: Subject<string> = new Subject();
  filtro: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(600))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    this.onEnter.emit( this.filtro );
  }

  teclaPresionada() {
    this.debouncer.next( this.filtro );
  }

}
