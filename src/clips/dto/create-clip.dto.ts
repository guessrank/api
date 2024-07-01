import { IsString, IsNotEmpty } from 'class-validator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  rank: string;

  @IsString()
  @IsNotEmpty()
  division: string;
}
