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
      console.log(res)
      this.images=res.hits;
    });
  }

  loadCategory(event){
    this.pixaService.getCategory(event).subscribe(res=>{
      this.images=res.hits;
    });
  }

  loadSearch(event){
    this.pixaService.getSearch(event).subscribe(res=>{
      this.images=res.hits;
    });
  }

  onOption(event){
    this.loadCategory(event);
  }

  onSearchOption(event){
    this.loadSearch(event);
  }

  onReset(event){
    this.ngOnInit();
  }
}
