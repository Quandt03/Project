import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
 confirmDelete() {
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmation) {
      // Thực hiện hành động xóa tại đây
      console.log("Đã xóa");
    } else {
      // Hủy hành động xóa
      console.log("Hủy xóa");
    }
  }
}
