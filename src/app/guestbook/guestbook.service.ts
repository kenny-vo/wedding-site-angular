import { Injectable } from '@angular/core';
import { Message } from './message';
import { Http, Response } from '@angular/http';

@Injectable()
export class GuestbookService {
  private messagesUrl = '/api/messages';

  constructor (private http: Http) {}

    // get("/api/messages")
    getMessages(): Promise<void | Message[]> {
      return this.http.get(this.messagesUrl)
        .toPromise()
        .then(response => response.json() as Message[])
        .catch(this.handleError);
    }

    // post("/api/messages")
    createMessage(newMessage: Message): Promise<void | Message> {
      return this.http.post(this.messagesUrl, newMessage)
        .toPromise()
        .then(response => response.json() as Message)
        .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}