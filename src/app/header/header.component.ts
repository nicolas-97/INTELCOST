import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() option = new EventEmitter<String>();
  @Output() search = new EventEmitter<String>();
  @Output() reset = new EventEmitter<boolean>();

  searchWord:String="";


  constructor() { }

  ngOnInit() {
  }

  searchButton(){
    this.search.next(this.searchWord);
  }
  selectOption(option){
    this.option.next(option);
  }

  logoAction(){
    this.reset.next(true);
  }
}
