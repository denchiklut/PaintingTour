import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl']
})
export class SidenavComponent {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('message', 'action', {
      horizontalPosition: 'right',
      duration: 2000
    });
  }
}
