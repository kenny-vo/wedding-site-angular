import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../guestbook/message';
import { GuestbookService } from '../guestbook/guestbook.service';

@Component({
  selector: 'app-guestbook-details',
  templateUrl: './guestbook-details.component.html',
  styleUrls: ['./guestbook-details.component.scss']
})

export class GuestbookDetailsComponent implements OnInit {
  @Input()
  message: Message;

  @Input()
  createHandlerMessage: Function;

  constructor (private guestbookService: GuestbookService) {}

  createMessage(message: Message) {
    this.guestbookService.createMessage(message).then((newMessage: Message) => {
      this.createHandlerMessage(newMessage);
    });
  }

  ngOnInit() {
    
  }

}
