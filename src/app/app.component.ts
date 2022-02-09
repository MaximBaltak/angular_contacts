import { Component } from '@angular/core';
import {ContactServiceService} from "./services/contact-service.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('show',[
      transition('void=>*',[
        style({opacity:0}),
        animate('0.6s',style({opacity:1}))
      ]),
      transition('*=>void',[
        style({opacity:1}),
        animate('0.6s',style({opacity:0}))
      ])
    ])
  ]
})
export class AppComponent {
  sr:ContactServiceService
  constructor(private contactService:ContactServiceService) {
    this.sr=contactService
  }
  open():void{
    this.sr.toggleModal('add')

  }
  clear():void{
    this.sr.clearContacts()
  }

}
