import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureGlobalPipes } from './common/config/global-pipes.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  configureGlobalPipes(app);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
