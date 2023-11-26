import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor (
    private data:DataService
  ){}
ngOnInit(): void {
  this.getData()
}

  getData(){
    this.data.getData('/news').subscribe(
      res=>{
        // console.log(res);
        
      },
      err=>{}
    )
  }


}
