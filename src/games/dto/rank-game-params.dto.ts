import { IsNumber, IsString } from 'class-validator';

export class RankGameParamsDto {
  @IsString()
  uniqueId?: string;

  @IsNumber()
  level: number;
}
