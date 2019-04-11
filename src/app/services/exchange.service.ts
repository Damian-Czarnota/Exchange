import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import { HttpClient,HttpParams,HttpHeaders  } from '@angular/common/http';
import {ExchangeInterface} from "../interfaces/interfaces";
import {map} from "rxjs/internal/operators/map";
import {catchError} from "rxjs/internal/operators/catchError";
import {throwError, of} from "rxjs/index";
import {} from "rxjs/index";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http:HttpClient,
              private storageService: StorageService) { }

  get(base: string, goal: string) {
    let storageName: string = (base + goal).toUpperCase();
    return this.storageService.isInStorage(storageName)
      ? this.storageService.getExchangeFromStorage(storageName)
      : this.getViaApi(base, goal)
  }


  private getViaApi(base: string, goal: string) {
  let params: HttpParams = new HttpParams();
  params = params.append('base',base);
  params = params.append('symbols',goal);
  if(!this.storageService.isDateInStorage())
    this.storageService.dateUpdate();

  return this.http.get<ExchangeInterface>(`${environment.API_URL}/latest`,{params:params}).pipe(
        map(res => {
          return res
            ? this.saveInStorageAndReturn(base, goal, res)
            : throwError('Ops... Something went wrong!')
        }),
        catchError(error => of(error)));
  }

  private saveInStorageAndReturn(base, goal, res) {
    this.storageService.saveExchangeInStorage((base+goal).toUpperCase(), res);
    return res;
  }
}
