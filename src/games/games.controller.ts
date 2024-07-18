import { Controller, Get, Query, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { ResponseUtil } from 'src/common/utils/response.util';
import { GetGameDto } from './dto/get-game.dto';
import { RankGameParamsDto } from './dto/rank-game-params.dto';
import { CustomHttpException } from 'src/common/exceptions/http.exception';

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

  @Get('/:uniqueId/ranks/:level')
  async findRankGameByLevel(
    @Param() params: RankGameParamsDto,
  ): Promise<ResponseUtil> {
    const existGame = await this.gamesService.findGameById(params.uniqueId);
    if (!existGame)
      throw new CustomHttpException({
        status: 404,
        message: 'Game not found',
      });
    return ResponseUtil.successResponse({
      message: 'Rank retrieved successfully',
      body: await this.gamesService.findRankGameByLevel(
        params.uniqueId,
        params.level,
      ),
    });
  }
}
