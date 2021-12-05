import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private client: HttpClient) {}

  public login(user: UserModel): Observable<any> {
    return this.client.get('assets/users.json').pipe(
      map((users: any): boolean => {
        const foundUser: UserModel | undefined = users.find(
          (userItem: UserModel) =>
            userItem.email === user.email && userItem.password === user.password
        );
        localStorage.foundUser = JSON.stringify(foundUser);
        return Boolean(foundUser);
      })
    );
  }
}
