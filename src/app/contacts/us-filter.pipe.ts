import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'usFilter'
})
export class UsFilterPipe implements PipeTransform {

  transform(items: Contact[], rsvp: Contact): Contact[] {
    return items.filter((item: Contact) => this.applyFilter(item, rsvp));
  }

  applyFilter(contact: Contact, filter: Contact): boolean {
    if (contact.kl === 'FALSE') {
      return false;
    }
    return true;
  }

}
