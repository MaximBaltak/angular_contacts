import { Injectable } from '@angular/core';
import {IContact} from "./contactsTypes";

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
 contacts:IContact[]=[
   {
     id:'9929292',
     name:'maxim',
     phone:'+34524785651',
     avatar:{
       background: 'rgb(23,45,126)',
       symbol: 'M'
     }
 },
 ]
  inputName:string=''
  inputPhone:string=''
  errorName:string=''
  errorPhone:string=''
  showModal:boolean=false
  typeModal:string='add'
  idForEditor:string=''

  addContact():void{
   if(!this.inputName) {
     this.errorName = 'Поле пустое'
   }
    if (!this.inputPhone) {
      this.errorPhone = 'Пустое поле'
    }
    if(!this.errorPhone&&!this.errorPhone){
      const contact:IContact={
        id:Math.floor(Math.random()*1000).toString(),
        name:this.inputName,
        phone:this.inputPhone,
        avatar:{
          background:ContactServiceService.randomColor(),
          symbol:this.inputName[0].toUpperCase()
        }
      }
      this.contacts.unshift(contact)
    }

    this.inputPhone=''
    this.inputName=''
    this.showModal=!this.showModal
  }
  editContact(id:string): void{
    if(!this.inputName) {
      this.errorName = 'Поле пустое'
      }
    if (!this.inputPhone) {
      this.errorPhone = 'Пустое поле'
    }
    if(!this.errorPhone&&!this.errorName){
      this.contacts.forEach(contact => {
        if (contact.id === id) {
          if (contact.name !== this.inputName) {
            contact.name = this.inputName
            contact.avatar.background = ContactServiceService.randomColor()
            contact.avatar.symbol = this.inputName[0].toUpperCase()
          }
          if (contact.phone !== this.inputPhone) {
            contact.phone = this.inputPhone
          }
        }
      })
    }
    this.errorName=''
    this.errorPhone=''
    this.inputPhone=''
    this.inputName=''
    this.showModal=!this.showModal
  }
  deleteId(id:string): void{
   this.contacts.forEach((contact,i)=>{
     if(contact.id===id){
       this.contacts.splice(i,1)
     }
   })
  }
  clearContacts(): void{
   this.contacts=[]
  }
  toggleModal(type:string='',id:string=''): void{
    this.typeModal=type
    this.idForEditor=id
    this.showModal=!this.showModal
    if(type==='edit'){
      this.contacts.forEach(contact=>{
        if(contact.id===id){
          this.inputName=contact.name
          this.inputPhone=contact.phone
        }
      })
    }
  }
  changeInputName(name:string){
   this.inputName=name
  }
  changeInputPhone(phone:string){
    this.inputPhone=phone
  }

  static randomColor():string{
    const r:number=Math.floor(Math.random()*256)
    const g:number=Math.floor(Math.random()*256)
    const b:number=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
  }

}
