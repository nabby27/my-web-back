import { MailRepository } from '../../../app/domain/mail/repositories/mailRepository';

export class MailRepositoryInMemory implements MailRepository {

  public sendMail(): Promise<any> {
    return new Promise((resolve, _reject) => {
      resolve();
    });
  }

}
