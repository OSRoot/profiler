import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor (
    private data:DataService
  ){}

  ngOnInit(): void {
    
  }
  getData(){
    this.data.getData('/contactus/store').subscribe(
      res=>{},
      err=>{}
    )
  }
}
