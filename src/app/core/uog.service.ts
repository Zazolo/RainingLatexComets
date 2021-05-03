import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class UogService {

  private lastUID:string;

  constructor() { }

  public getUID(){
    this.lastUID = uuid.v4();
    return this.lastUID;
  }
}
