import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.scss'
})
export class UserdetailComponent {
  buttonText: string = 'Activate user';

  toggleButtonText() {
    this.buttonText = this.buttonText === 'Activate user' ? 'De-Activate user' : 'Activate user';
  }
}
