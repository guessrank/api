import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Division, DivisionSchema } from './division.schema';
@Schema()
export class Rank {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imageSrc: string;

  @Prop({ required: true })
  level: number;

  @Prop({ type: [DivisionSchema], required: true })
  divisions: Division[];
}

export const RankSchema = SchemaFactory.createForClass(Rank);
