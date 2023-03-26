import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['https://test-project.yestemessov.kz'],
      credentials: true,
    },
  });
  await app.listen(8465);
}
bootstrap();
