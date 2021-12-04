import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private client: HttpClient) {}

  public login(user: UserModel): Observable<any> {
    return this.client
      .get('assets/users.json')
      .pipe(
        map((users: any): boolean =>
          Boolean(
            users.find(
              (userItem: UserModel) =>
                userItem.username === user.username &&
                userItem.password === user.password
            )
          )
        )
      );
  }
}
