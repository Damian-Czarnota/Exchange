import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Config, ExchangeInterface} from "../../interfaces/interfaces";

@Component({
  selector: 'app-exchange-slide',
  templateUrl: './exchange-slide.component.html',
  styleUrls: ['./exchange-slide.component.scss']
})
export class ExchangeSlideComponent {
  @Input() private context: ExchangeInterface = null;
  @Input() private config: Config = null;
  @Output() private event: EventEmitter<number> = new EventEmitter();
  constructor() { }


  changeContent(event){
    this.event.emit(event);
  }

}
