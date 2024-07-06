import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Rank } from './rank.schema';

@Schema()
export class Division {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rank: Rank;
}

export const DivisionSchema = SchemaFactory.createForClass(Division);
