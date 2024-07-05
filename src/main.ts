import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { configureGlobalPipes } from './common/config/global-pipes.config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  const configService = app.get(ConfigService);
  configureGlobalPipes(app);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: 'http://localhost:3000', // dev
    credentials: true,
  });
  app.use(morgan(configService.get<string>('MORGAN_CONFIG', 'dev')));
  await app.listen(configService.get<number>('PORT', 3000));
}
bootstrap();
