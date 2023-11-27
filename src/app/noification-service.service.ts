import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoificationServiceService {

  source = new BehaviorSubject<String>('dafult');


  constructor() { }

  changeNotification(message: string) {
    this.source.next(message);
  }
}
