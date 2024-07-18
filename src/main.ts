import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { configureGlobalPipes } from './common/config/global-pipes.config';
import { swaggerConfig } from './common/config/swagger.config';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/docs', app, document);
  const configService = app.get(ConfigService);
  configureGlobalPipes(app);
  app.setGlobalPrefix('api/v1');
  app.enableCors(configService.get<Object>('cors', {}));
  app.use(morgan(configService.get<string>('MORGAN_CONFIG', 'dev')));
  await app.listen(configService.get<number>('PORT', 3000));
}
bootstrap();
