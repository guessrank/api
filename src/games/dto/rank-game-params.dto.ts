import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class RankGameParamsDto {
  @IsString()
  uniqueId?: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  level: number;
}
