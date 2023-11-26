import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data/data.service';
import { HeaderComponent } from '../../core/shared/components/header/header.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private data:DataService
  ){}
ngOnInit(): void {
  
}
  getData(){
    this.data.getData('/news').subscribe(
      res=>{
        // console.log(res);
      },
      err=>{}
    )
  }

  getDataById(id:any){
    this.data.getData('/news/show/'+id).subscribe(
      res=>{
        // console.log(res);
      },
      err=>{}
    )
  }
  
}
