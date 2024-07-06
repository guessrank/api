import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from 'src/schemas/game.schema';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  /**
   * Find all games
   * @returns {Promise<Game[]>} - A promise that resolves with an array of games
   */
  async findAll(): Promise<Game[]> {
    return this.gameModel
      .find(
        {},
        {
          _id: 0,
          __v: 0,
          'ranks._id': 0,
          'ranks.divisions._id': 0,
        },
      )
      .exec();
  }
}
