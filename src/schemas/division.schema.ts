import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Division {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  imageSrc: string;

  @Prop({ required: true })
  level: number;
}

export const DivisionSchema = SchemaFactory.createForClass(Division);
