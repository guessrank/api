import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Rank {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imageSrc: string;

  @Prop({ required: true })
  level: number;
}

export const RankSchema = SchemaFactory.createForClass(Rank);
