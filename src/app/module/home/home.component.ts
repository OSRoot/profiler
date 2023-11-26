import { Component, OnInit, ElementRef, Renderer2  } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  isLoading:boolean =false;
  constructor(
    private data:DataService
    , private renderer: Renderer2, private el: ElementRef
    ){}

ngOnInit():void{
  this.getData();

}
scrollToSection(sectionId: string): void {
  const element = this.el.nativeElement.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
  getData(){
    this.data.getData('/home/all').subscribe(
      res=>{
      },
      err=>{}
    )
  }


}
