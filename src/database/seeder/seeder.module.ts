import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema, Game } from '../../schemas/game.schema';
import { ClipSchema, Clip } from '../../schemas/clip.schema';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Game.name,
        schema: GameSchema,
      },
      {
        name: Clip.name,
        schema: ClipSchema,
      },
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
