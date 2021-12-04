import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropWatcherService {
  private wasDropped: EventEmitter<any>;
  constructor() {
    this.wasDropped = new EventEmitter();
  }

  public send(message: any): void {
    this.wasDropped.emit(message);
  }

  public getDrop(): Observable<any> {
    return this.wasDropped.asObservable();
  }
}
