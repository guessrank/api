import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { ResponseUtil } from 'src/common/utils/response.util';
import { CustomHttpException } from 'src/common/exceptions/http.exception';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() payload: LoginDto) {
    try {
      const response = await this.authService.login(payload);
      return ResponseUtil.successResponse({
        message: 'Login successful',
        body: response,
      });
    } catch (error) {
      throw new CustomHttpException({
        message: error.message,
        status: error.status,
      });
    }
  }
}
