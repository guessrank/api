import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorType } from './error-types';

interface ErrorObject {
  status: number | HttpStatus;
  type?: string | ErrorType;
  message?: string;
  errors?: any[];
}

export class CustomHttpException extends HttpException {
  constructor(options: ErrorObject) {
    const {
      message,
      status = HttpStatus.INTERNAL_SERVER_ERROR,
      type = ErrorType.GLOBAL,
      errors,
    } = options;
    super(
      {
        statusCode: status,
        type,
        message,
        errors,
      },
      status,
    );
  }
}
