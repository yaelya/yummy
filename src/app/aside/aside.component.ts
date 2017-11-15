import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
 public images: string[];
  public index: number;
  public urlImage1: string;
  public urlImage2: string;
  constructor() {
    this.index = 0;
    this.images = [
      "http://gratefulforgrace.com/wp-content/uploads/2011/12/shake.jpg",
      "http://sport.kmc.co.il/filestock/img/thumbnail_1338801724.jpg",
      "http://3.bp.blogspot.com/-dzQJk-YONmE/UKooDaU1c6I/AAAAAAAAS3w/rSpl76pd-Zg/s1600/DSC_0390+-+Copy.JPG"
    ];
    this.urlImage1 = this.image;
    this.urlImage2= this.image;
    setInterval(() => {
      this.urlImage1 = this.image;
      this.urlImage2 = this.image;
    }, 2000)

   }
    public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }

  ngOnInit() {
  }

}
