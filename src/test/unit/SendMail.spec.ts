import { SendMailAction } from '../../app/domain/mail/actions/sendMailAction';
import { ContactForm } from '../../app/domain/mail/entities/contactForm.entity';
import { MailRepositoryInMemory } from './repositories/mailRepositoryInMemory';

describe('Unit test to Send Mail', () => {

  let sendMailAction: SendMailAction;

  beforeEach(() => {
    sendMailAction = new SendMailAction(new MailRepositoryInMemory());
  });

  it('Should send mail', async () => {
    const data: ContactForm = {
      name: '',
      email: '',
      message: '',
    };

    sendMailAction.execute(data);
  });

});
