import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: any;
  public error: any;

  constructor(
    private router: Router,
    private serv: LoginService,
    private snack: MatSnackBar
  ) {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  public submit(): void {
    if (this.form.valid) {
      this.serv.login(this.form.value).subscribe((logged) => {
        if (logged) {
          this.router.navigateByUrl('/dashboard/manage-page/list');
        } else {
          this.snack.open(
            'Verifique suas credenciais e tente novamente!',
            undefined,
            { duration: 2000 }
          );
          this.form.reset();
        }
      });
    }
  }
}
