import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateClipDto } from '../dto/create-clip.dto';
import { youtubeEmbedUrl } from 'src/common/utils/yt-embed.util';

@Injectable()
export class YoutubeEmbedUrlPipe implements PipeTransform {
  transform(value: CreateClipDto, metadata: ArgumentMetadata) {
    if (!value.url) return value;
    return {
      ...value,
      url: youtubeEmbedUrl(value.url),
    };
  }
}
