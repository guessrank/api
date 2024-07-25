import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { IsYoutubeUrl } from 'src/common/decorators/is-youtube-url.decorator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty()
  @IsYoutubeUrl()
  url: string;

  @IsNumber()
  @IsNotEmpty()
  rankLevel: Number;

  @IsNumber()
  @IsNotEmpty()
  divisionLevel: Number;

  @IsString()
  @IsNotEmpty()
  gameId: string;
}
