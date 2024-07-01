import { Body, Controller, Query, Get, Post } from '@nestjs/common';
import { ClipsService } from './clips.service';
import { CreateClipDto } from './dto/create-clip.dto';

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Get()
  async findAll(query: any) {
    return this.clipsService.findAll();
  }

  @Post()
  createClip(@Body() payload: CreateClipDto) {
    return this.clipsService.create(payload);
  }
}
