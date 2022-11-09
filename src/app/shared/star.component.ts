import { Component, OnChanges, Input } from '@angular/core';


@Component ({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  //  @Input decorator used for receiving input from it's container 
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
