import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from 'src/schemas/game.schema';
import { Rank } from 'src/schemas/rank.schema';
import { GetGameDto } from './dto/get-game.dto';
@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  async findAll(query: GetGameDto): Promise<Game[]> {
    return this.gameModel
      .find(
        {
          ...(query.uniqueId && { uniqueId: query.uniqueId }),
        },
        {
          _id: 0,
          __v: 0,
          'ranks._id': 0,
          'ranks.divisions._id': 0,
        },
      )
      .exec();
  }

  async findGameById(uniqueId: string): Promise<Game> {
    return this.gameModel.findOne({
      uniqueId,
    });
  }

  async findRankGameByLevel(
    gameUniqueId: string,
    level: number,
  ): Promise<Rank[]> {
    const game = await this.gameModel
      .findOne({ uniqueId: gameUniqueId })
      .exec();
    console.log(game);
    return game.ranks.filter((rank) => rank.level === level);
  }
}
