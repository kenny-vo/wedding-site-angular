import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'contact-list-kl',
  templateUrl: './contact-list-kl.component.html',
  styleUrls: ['./contact-list-kl.component.scss'],
  providers: [ContactService]
})

export class ContactListklComponent implements OnInit {

  contacts: Contact[]
  selectedContact: Contact
  public searchText : string;
  fullList: number;
  rsvp_sent: number;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.fullList = 0;
    this.rsvp_sent = 0;
    this.contactService.getContacts().then((contacts: Contact[]) => {
      this.contacts = contacts.map((contact) => {
        return contact;
      });
    });
  }

  private getIndexOfContact = (contactId: String) => {
    return this.contacts.findIndex((contact) => {
      return contact._id === contactId;
    });
  }

  hideList() {
    this.fullList = 0;
  }

  unHideList() {
    this.fullList = 1;
    this.selectedContact = null;
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.searchText = undefined;

  }

  createNewContact() {
    var contact: Contact = {
      name: '',
      rsvp: '',
      email: '',
      guests: 0,
      allowed_guests: 0,
      guest_name: '',
      dietary: '',
      comment: '',
      kl: 'TRUE',
      cookout: ''
    };

    // By default, a newly-created contact will have the selected state.
    this.selectContact(contact);
  }

  deleteContact = (contactId: String) => {
    console.log(contactId);
    var idx = this.getIndexOfContact(contactId);
    if (idx !== -1) {
      this.contacts.splice(idx, 1);
      this.selectContact(null);
    }
    return this.contacts;
  }

  addContact = (contact: Contact) => {
    this.contacts.push(contact);
    this.selectContact(contact);
    this.selectedContact = null;
    this.rsvp_sent = 1;
    emailjs.sendForm('gmail','wedding_rsvp', '#contact-form', 'user_bf18asTQivHdi3ZB94vGG')
    return this.contacts;
  }

  updateContact = (contact: Contact, contactId: String) => {
    var idx = this.getIndexOfContact(contactId);
    if (idx !== -1) {
      this.contacts[idx] = contact;
      this.selectContact(contact);
    }
    this.fullList = 0;
    this.selectedContact = null;
    this.rsvp_sent = 1;
    emailjs.sendForm('gmail','wedding_rsvp', '#contact-form', 'user_bf18asTQivHdi3ZB94vGG')
    console.log('thanks for the RSVP!')
    return this.contacts;
  }
}
