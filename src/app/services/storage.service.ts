import { Injectable } from '@angular/core';
import {ExchangeInterface} from "../interfaces/interfaces";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private updateDate: Date;

  constructor() {  }

  public getExchangeFromStorage(name: string): Observable<ExchangeInterface> {
    let data = JSON.parse(localStorage.getItem(name));
    return of(data);
  }

  public isInStorage(name: string): boolean {
   return !!localStorage.getItem(name);
  }

  public isDateInStorage(): boolean {
    if(localStorage.getItem('updateDate')){
      this.updateDate = new Date(localStorage.getItem('updateDate'));
      return true;
    }
    else
      return false;
  }
  public saveExchangeInStorage(name: string, item: ExchangeInterface): void{
    localStorage.setItem(name,JSON.stringify(item));
  }

  public dateUpdate() {
    this.updateDate = new Date();
    this.clearStorage();
    localStorage.setItem("updateDate",new Date().toDateString());
  }

  private clearStorage(): void {
    localStorage.clear();
  }

}
