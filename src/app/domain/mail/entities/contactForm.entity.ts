export class ContactForm {

  name = '';
  email = '';
  message = '';

  constructor(obj: any) {
    Object.assign(this, obj);
  }

}
