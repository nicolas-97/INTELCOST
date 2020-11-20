import { Component, OnInit } from '@angular/core';
import {PixabayServiceService} from 'src/service/PixabayService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  category:String="";
  search:String="";
  title = 'INTELCOST';

  images=[];

  constructor(private pixaService:PixabayServiceService) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages(){
    this.pixaService.get().subscribe(res=>{
      this.images=res.hits;
    });
  }

  loadCategory(){
    this.pixaService.getCategory(this.category).subscribe(res=>{
      this.images=res.hits;
    });
  }

  loadSearch(){
    this.pixaService.getSearch(this.search).subscribe(res=>{
      this.images=res.hits;
    });
  }

  onOption(event){
    this.category=event;
  }

  onSearchOption(event){
    this.search=event;
  }
}
