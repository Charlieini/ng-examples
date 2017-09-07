import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    { id: 0, text: `Dale calor`},
    { id: 1, text: `Caloret`},
    { id: 2, text: `Más calor incluso`}
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id? {id, text} : m
    )
  }

  constructor() { }

}
