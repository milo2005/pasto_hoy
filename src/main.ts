import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppInit } from './app-init.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add DTO Validation
  app.useGlobalPipes(new ValidationPipe());

  // Init default data
  await app.get(AppInit).init();

  await app.listen(3000);
}
bootstrap();
