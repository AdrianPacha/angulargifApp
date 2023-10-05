import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      (keyup.enter)="serchTag()"
      #txtTagInput
      placeholder="Buscar gifs..."
    /> `,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;
  serchTag() {
    const newtag = this.txtTagInput.nativeElement.value;
    console.log({ newtag });
  }
}
