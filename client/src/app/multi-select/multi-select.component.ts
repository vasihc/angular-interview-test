import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'multiPipe'
})
export class MultiPipe implements PipeTransform {
  transform(dict: Object, searchText: string) {
    var result = [];
    if (searchText == null || searchText == undefined)
      searchText = "";
    searchText = searchText.toLowerCase();
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        result.push({key: key, val: dict[key]});
      }
    }
    return result.filter(item => {
      return item.val.toLowerCase().includes(searchText);
    });
  }
}

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent {
  @Input('tags') public set tags(tags: any) {
    if (tags != undefined && this.tagsCount < 0) {
      this.tagsList = tags;
      this.tagsCount = Object.keys(this.tagsList).length;
    }
  };
  @Input() mellowness: number = 46;
  @Output() selected = new EventEmitter<number>();
  searchText: string;
  selectedColor: string = "";
  tagsList: any = {};
  selectedTag: number;
  tagsCount: number = -1;
  collapse: boolean = false;
  private range: number = 255 - this.mellowness;

  constructor() {
  }

  toggle() {
    this.collapse = !this.collapse;
    if (this.collapse && this.selectedColor.length > 0) {
      this.selectedColor = "";
      this.searchText = "";
    }
  }

  selectItem(item: any) {
    this.searchText = item.val;
    this.selectedTag = item.key;
    this.selectedColor = this.getColorByIndex(this.selectedTag);
    this.selected.emit(this.selectedTag);
    this.toggle()
  }

  public getColorByIndex(index: number): string {
    let x = (2 * this.range / (this.tagsCount - 1)) * (index - 1);
      let red = x >= this.range ? 255 : this.mellowness + x;
      let green = x > this.range ? 255 - x + this.range : 255;
      let blue = this.mellowness;
      return this.rgbToHex(Math.round(red), Math.round(green), Math.round(blue));
  }

  private componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

}
