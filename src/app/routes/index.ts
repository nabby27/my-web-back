import express, { Request, Response, Router } from 'express';
import { MailController } from '../controllers/mailController';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Wellcome to my node API' });
});

router.post('/sendMail', (req: Request, res: Response) => {
  const sendMail: MailController = new MailController();
  return sendMail.sendMail(req, res);
});

export default router;
