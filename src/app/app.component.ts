import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiwList';
  item: string;
  thoughts = [];

  onDigitClick() {
    this.thoughts.push({name: this.item});
    this.item = '';
  }

  onDelete(index) {
    this.thoughts.splice(index, 1);
  }
}
