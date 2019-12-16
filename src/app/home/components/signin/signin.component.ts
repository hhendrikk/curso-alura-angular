import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector.service';

@Component({
  selector: 'ap-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formSignin: FormGroup;
  @ViewChild('inputUserName', { static: false }) inputUserName: ElementRef<
    HTMLInputElement
  >;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private platformBrowserService: PlatformDetectorService
  ) {}

  ngOnInit() {
    this.formSignin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logar() {
    const username = this.formSignin.get('username').value;
    const password = this.formSignin.get('password').value;

    this.authService.authenticate(username, password).subscribe(
      () => this.route.navigate(['user', username]),
      err => {
        alert('Usuário não autenticado');
        this.formSignin.reset();

        if (this.platformBrowserService.isPlatformBrowser()) {
          this.inputUserName.nativeElement.focus();
        }
      }
    );
  }
}
