import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RankSchema, Rank } from './rank.schema';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop({ required: true, unique: true })
  uniqueId: string;

  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  imageSrc: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [RankSchema], required: true })
  ranks: Rank[];
}

export const GameSchema = SchemaFactory.createForClass(Game);
