import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CustomHttpException } from '../exceptions/http.exception';

export function configureGlobalPipes(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const messages = errors.map((error) => ({
          property: error.property,
          errors: Object.values(error.constraints),
        }));
        return new CustomHttpException({
          message: 'Validation failed',
          status: 400,
          errors: messages,
        });
      },
    }),
  );
}
