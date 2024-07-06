import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';
import { ResponseUtil } from 'src/common/utils/response.util';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  async findAll(): Promise<ResponseUtil> {
    return ResponseUtil.successResponse({
      message: 'Games retrieved successfully',
      body: await this.gamesService.findAll(),
    });
  }
}
