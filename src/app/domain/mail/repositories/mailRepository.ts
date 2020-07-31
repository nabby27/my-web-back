import { ContactForm } from '../vo/contactForm';

export interface MailRepository {

  sendMail(data: ContactForm): Promise<boolean>;

}
