import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClipsService } from './clips.service';
import { CreateClipDto } from './dto/create.clip.dto';

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Get()
  async findAll() {
    return this.clipsService.findAll();
  }

  @Post()
  createClip(@Body() clip: CreateClipDto) {
    return this.clipsService.create(clip);
  }
}
