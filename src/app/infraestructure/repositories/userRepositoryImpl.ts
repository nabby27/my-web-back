import * as dotenv from 'dotenv';
import * as nodemailer from 'nodemailer';
import { MailRepository } from '../../domain/mail/repositories/mailRepository';
import { ContactForm } from '../../domain/mail/vo/contactForm';

dotenv.config();

export class MailRepositoryImpl implements MailRepository {

  constructor() {
  }

  async sendMail(data: ContactForm): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Contact from MY WEB',
      html:
        '<h3>Name</h3>' +
        '<div>' + data.name + '</div>' +
        '<h3>Email</h3>' +
        '<div>' + data.email + '</div>' +
        '<h3>Message</h3>' +
        '<div>' + data.message + '</div>',
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
  }

}
