import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../../services/contactsTypes";
import {ContactServiceService} from "../../services/contact-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact!:IContact
  service:ContactServiceService
  constructor(private sr:ContactServiceService) {
    this.service=sr
  }

  ngOnInit(): void {
  }
  edit():void{
    this.service.toggleModal('edit',this.contact.id)
  }
  delete():void{
    this.service.deleteId(this.contact.id)
  }

}
