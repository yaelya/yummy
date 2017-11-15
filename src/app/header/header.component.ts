import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NavService } from "../nav.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title='yammy';
  decription='Enjoy the flavor of life';

  constructor(public  NavService: NavService) { }

  ngOnInit() {
  }

}
