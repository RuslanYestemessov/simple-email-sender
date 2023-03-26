import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailInteface } from './email.inteface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('notification')
  sendEmail(@Body() body: EmailInteface) {
    return this.appService.sendMail(body);
  }
}
