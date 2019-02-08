import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'hasProperty',
  pure: false
})
export class hasProperty implements PipeTransform {
  transform(items: Contact[], rsvp: Contact): Contact[] {
    return items.filter((item: Contact) => this.applyFilter(item, rsvp));
  }

  applyFilter(contact: Contact, filter: Contact): boolean {
    if (contact.rsvp !== '') {
      return false;
    }
    return true;
  }
}