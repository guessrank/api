import { HttpStatus } from '@nestjs/common';

interface SuccessResponseOptions {
  message: string;
  body: any;
  code?: HttpStatus.OK;
  options?: any;
}

export class ResponseUtil {
  static successResponse({
    code = HttpStatus.OK,
    message,
    body,
    options,
  }: SuccessResponseOptions) {
    return {
      code,
      message,
      body,
      options,
    };
  }
}
