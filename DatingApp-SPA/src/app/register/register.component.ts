import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  register() {
    this.authService.signin(this.model).subscribe(() => {
      this.alertify.success('Registration successful');
     }, error => {
       this.alertify.error(error);
     });
  }
}
