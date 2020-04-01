import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.styl'],
})
export class SidenavComponent {
  @Input() items: string[];
  @Output() queryChange = new EventEmitter();

  query: string;
  url = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80';

  onChange = () => {
    this.queryChange.emit({ q: this.query});
  }
}

export interface QueryChangedEvent {
  q: string;
}
