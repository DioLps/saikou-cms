import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagePageService {
  constructor(private client: HttpClient) {}

  public getAgencyTemplate(): Observable<any> {
    return this.client.get('assets/agency-template.json');
  }

  public getPortolioTemplate(): Observable<any> {
    return this.client.get('assets/portfolio-template.json');
  }
}
