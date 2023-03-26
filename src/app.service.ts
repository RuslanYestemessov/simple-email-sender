import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { catchError, defer } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private mailer: MailerService) {}
  sendMail(text: string) {
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
