import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
