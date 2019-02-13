import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'klFilter',
  pure: false
})
export class KlFilterPipe implements PipeTransform {

  transform(items: Contact[], rsvp: Contact): Contact[] {
    return items.filter((item: Contact) => this.applyFilter(item, rsvp));
  }

  applyFilter(contact: Contact, filter: Contact): boolean {
    if (contact.kl === 'TRUE') {
      return false;
    }
    return true;
  }

}
