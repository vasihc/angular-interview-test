import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  mellowness: number = 46;
  tagsCount: number;
  range: number = 255 - this.mellowness;


  constructor() { }

  ngOnInit() {
  }

  getColorByIndex(index: number): string {
    let x = (2 * this.range / (this.tagsCount - 1)) * index;
    let red = x >= this.range ? 255 : this.mellowness + x;
    let green = x > this.range ? 255 - x + this.range : 255;
    let blue = this.mellowness;
    return this.rgbToHex(red, green, blue);
  }

  private componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

}
