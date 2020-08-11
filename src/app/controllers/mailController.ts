import { Request, Response } from 'express';
import { SendMailAction } from '../domain/mail/actions/sendMailAction';
import { MailRepositoryImpl } from '../infraestructure/repositories/userRepositoryImpl';

export class MailController {

  private sendMailAction: SendMailAction;

  constructor() {
    this.sendMailAction = new SendMailAction(new MailRepositoryImpl());
  }

  public async sendMail(req: Request, res: Response) {
    const dataMail = req.body;
    this.sendMailAction.execute(dataMail)
      .then((data) => res.status(200).send({ isSent: data }))
      .catch(() => res.status(500).send({ error: 'Can\'t send the mail' }));
  }

}
