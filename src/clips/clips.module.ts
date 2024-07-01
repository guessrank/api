import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClipsService } from './clips.service';
import { ClipsController } from './clips.controller';
import { ClipSchema } from 'src/schemas/clip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Clip',
        schema: ClipSchema,
      },
    ]),
  ],
  controllers: [ClipsController],
  providers: [ClipsService],
})
export class ClipsModule {}
