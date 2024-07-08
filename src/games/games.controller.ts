import { Controller, Get, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { ResponseUtil } from 'src/common/utils/response.util';
import { GetGameDto } from './dto/get-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  async findAll(@Query() query: GetGameDto): Promise<ResponseUtil> {
    return ResponseUtil.successResponse({
      message: 'Games retrieved successfully',
      body: await this.gamesService.findAll(query),
    });
  }
}
