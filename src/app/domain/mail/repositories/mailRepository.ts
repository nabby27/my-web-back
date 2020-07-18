import { ContactForm } from '../entities/contactForm.entity';

export interface MailRepository {

  sendMail(data: ContactForm): Promise<boolean>;

}
