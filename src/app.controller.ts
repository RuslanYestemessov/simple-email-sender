import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('notification')
  sendEmail(@Body() body: { text: string }) {
    return this.appService.sendMail(body.text);
  }
}
