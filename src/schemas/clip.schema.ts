import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 } from 'uuid';

export type ClipDocument = HydratedDocument<Clip>;

@Schema()
export class Clip {
  @Prop({ default: () => v4() })
  uniqueId: string;

  @Prop({ unique: true, required: true })
  url: string;

  @Prop({ required: true })
  rankLevel: Number;

  @Prop({ required: true })
  divisionLevel: Number;

  @Prop({ required: true })
  gameId: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  approved: boolean;

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
