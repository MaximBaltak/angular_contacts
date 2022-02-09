import { Component, OnInit,Input } from '@angular/core';
import {IContact} from "../../services/contactsTypes";
import {ContactServiceService} from "../../services/contact-service.service"

@Component({
  selector: 'app-editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.scss'],
})
export class EditorModalComponent implements OnInit {
  @Input() idContact!:string
  @Input() typeModal!:string
  sr:ContactServiceService
  constructor(private contactService:ContactServiceService) {
    this.sr=contactService
  }

  ngOnInit(): void {
  }
  changeName(e:any):void{
    this.sr.changeInputName(e.target.value)
  }
  changePhone(e:any):void{
    this.sr.changeInputPhone(e.target.value)
  }
  edit(){
    this.sr.editContact(this.idContact)
  }
  add(){
    this.sr.addContact()
  }
  close(e:any){
   if(e.target.id==='overlay'){
     this.sr.toggleModal()
   }
  }

}
