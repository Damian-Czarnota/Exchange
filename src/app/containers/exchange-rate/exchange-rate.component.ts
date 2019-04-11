import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../../services/exchange.service";
import {StorageService} from "../../services/storage.service";
import {forkJoin, Observable, Subscriber} from "rxjs/index";
import {Config, ExchangeInterface} from "../../interfaces/interfaces";

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  constructor(private exchangeService: ExchangeService,
              private storageService: StorageService) {
  }

  private config: Array<Config> = [{base:'GBP', goal:'EUR'},
    {base:'CHF', goal:'USD'},
    {base:'USD', goal:'GBP'}];
  private _exchangeRatesData: Array<ExchangeInterface> = [];
  private _selectedIndex: number = 0;

  ngOnInit() {
    this.collectData()
  }

  collectData(): void {
    if(!this.storageService.isDateInStorage())
      this.storageService.dateUpdate()
    forkJoin(this.makeRequests()).subscribe(([...response]:Array<ExchangeInterface>)=>{
      this.exchangeRatesData = response;
    })
  }

  makeRequests(): Array<Observable<ExchangeInterface>> {
    let observableBatch = [];
    this.config.forEach(data =>{
      observableBatch.push(this.exchangeService.get(data.base, data.goal))
    });
    return observableBatch
  }


  changeContent(event: number){
    switch (event) {
      case -1:
        this.selectedIndex===0
          ?this.selectedIndex=this.exchangeRatesData.length-1
          :this.selectedIndex = this.selectedIndex-1;
        break;
      case 1:
        this.selectedIndex===this.exchangeRatesData.length-1
          ?this.selectedIndex=0
          :this.selectedIndex = this.selectedIndex+1;
        break;
    }
  }

  get exchangeRatesData(): Array<ExchangeInterface> {
    return this._exchangeRatesData;
  }

  set exchangeRatesData(value: Array<ExchangeInterface>) {
    this._exchangeRatesData = value;
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }
}
