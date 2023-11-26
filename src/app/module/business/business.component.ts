import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
business:any
isLoading:boolean =false;
//////////////////////////////////////////////////////////// 
constructor(
    private data:DataService
    , private renderer: Renderer2, private el: ElementRef
    ){}

//////////////////////////////////////////////////////////// 
ngOnInit():void{
  this.getData();

}
//////////////////////////////////////////////////////////// 
scrollToSection(sectionId: string): void {
  const element = this.el.nativeElement.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
//////////////////////////////////////////////////////////// 
  getData(){
    this.data.getData('/home/all').subscribe(
      res=>{
        
      },
      err=>{}
    )
  }
}
