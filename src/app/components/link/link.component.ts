import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;
  primaryFullWidth = false;

  @Input()
  size: 'standard' | 'small' | 'full' = 'standard';


  @Input('pm-link') inData: any;

  /**
   * Link contents
   *
   * @required
   */
  @Input()
  label: string = "My storybook button!";

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    // const mode = this.primary ? 'swa-cms-link-component--standard' : 'swa-cms-link-component--full';

    return ['swa-cms-link-component', `swa-cms-link-component--${this.size}`];
  }

}
