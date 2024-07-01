import { IsString, IsNotEmpty } from 'class-validator';
import { IsYoutubeUrl } from 'src/common/decorators/is-youtube-url.decorator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty()
  @IsYoutubeUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  rank: string;

  @IsString()
  @IsNotEmpty()
  division: string;

  @IsString()
  @IsNotEmpty()
  gameId: string;
}
