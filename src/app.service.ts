import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { catchError, defer } from 'rxjs';
import { EmailInteface } from './email.inteface';

@Injectable()
export class AppService {
  constructor(private mailer: MailerService) {}
  sendMail(dto: EmailInteface) {
    const text = `
        Новая заявка
        
        Почта: ${dto.email}
        Телефон: ${dto.phone}
        Имя: ${dto.name}
        `;
    return defer(() =>
      this.mailer.sendMail({
        text,
      }),
    ).pipe(
      catchError((err, caught) => {
        if (err) {
          console.log(err);
        }
        return caught;
      }),
    );
  }
}
