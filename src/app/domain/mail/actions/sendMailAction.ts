import { MailRepository } from '../repositories/mailRepository';
import { ContactForm } from '../vo/contactForm';

export class SendMailAction {

  private mailRepository: MailRepository;

  constructor(mailRepository: MailRepository) {
    this.mailRepository = mailRepository;
  }

  public async execute(data: ContactForm): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.mailRepository.sendMail(data)
        .then(() => {
          resolve(true);
        }).catch(() => {
          reject(false);
        });
    });
  }

}
