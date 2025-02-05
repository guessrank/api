import {
  Body,
  Controller,
  Query,
  Get,
  Post,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { CustomHttpException } from 'src/common/exceptions/http.exception';
import { ClipsService } from './clips.service';
import { CreateClipDto } from './dto/create-clip.dto';
import { GetClipDto } from './dto/get-clip.dto';
import { ErrorType } from 'src/common/exceptions/error-types';
import { ResponseUtil } from 'src/common/utils/response.util';
import { Throttle, minutes } from '@nestjs/throttler';
import { YoutubeEmbedUrlPipe } from './pipes/youtube-embed-url.pipe';

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Get()
  async findAll(@Query() query: GetClipDto): Promise<ResponseUtil> {
    const clips = await this.clipsService.findAll(query);
    const total = await this.clipsService.countAll(query);
    const total_page = clips.length;
    return ResponseUtil.successResponse({
      message: 'Clips retrieved successfully',
      body: clips,
      options: {
        page: query.page,
        total_page: total_page,
        max_page: Math.ceil(total / query.limit),
        total: total,
      },
    });
  }

  @Post()
  @UsePipes(new YoutubeEmbedUrlPipe())
  @Throttle({ medium: { limit: 5, ttl: minutes(1) } })
  async createClip(@Body() payload: CreateClipDto) {
    try {
      const exist = await this.clipsService.findByVideoUrl(payload.url);
      if (exist) {
        throw new CustomHttpException({
          message: 'Clip already exists',
          status: HttpStatus.CONFLICT,
          type: ErrorType.CREATION,
        });
      }
      return ResponseUtil.successResponse({
        message: 'Clip created successfully',
        body: await this.clipsService.create(payload),
      });
    } catch (error) {
      throw new CustomHttpException({
        message: 'Clip already exists',
        status: HttpStatus.CONFLICT,
        type: ErrorType.CREATION,
      });
    }
  }
}
