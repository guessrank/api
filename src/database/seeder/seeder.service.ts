import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from '../../schemas/game.schema';
import { gamesData } from '../data/games.data';

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  async seed(collectionName: string): Promise<void> {
    if (await this.gameModel.countDocuments().exec()) {
      this.logger.log('Data already exists in the collection.');
      return;
    }
    this.logger.log(`Seeding collection ${collectionName}...`);
    switch (collectionName) {
      case 'Game':
        await this.gameModel.insertMany(gamesData[0]);
        break;
      default:
        throw new Error('Invalid collection argument.');
    }
    this.logger.log(`Collection ${collectionName} has been seeded.`);
  }

  async drop(collectionName: string): Promise<void> {
    this.logger.log(`Dropping collection ${collectionName}...`);
    await this.gameModel.deleteMany({});
    this.logger.log(`Collection ${collectionName} has been dropped.`);
  }

  async clear(collectionName: string): Promise<void> {
    this.logger.log(`Clearing collection ${collectionName}...`);
    await this.gameModel.deleteMany({});
    this.logger.log(`Collection ${collectionName} has been cleared.`);
  }

  async reset(collectionName: string): Promise<void> {
    await this.clear(collectionName);
    await this.seed(collectionName);
  }
}
