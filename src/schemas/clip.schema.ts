import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 } from 'uuid';

export type ClipDocument = HydratedDocument<Clip>;

@Schema()
export class Clip {
  @Prop({ default: () => v4() })
  uniqueId: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  rank: string;

  @Prop({ required: true })
  division: string;

  @Prop({ required: true })
  gameId: string;

  /*
  @Prop({
    type: Number,
    required: false,
    enum: ['pc', 'ps4', 'xbox'],
    default: ''
  })
  userPlatform?: number;
*/
}

export const ClipSchema = SchemaFactory.createForClass(Clip);
