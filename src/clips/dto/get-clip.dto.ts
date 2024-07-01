import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsNumber } from 'class-validator';

export class GetClipDto {
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  approved: boolean = true;

  @IsString()
  @IsOptional()
  clipId?: string;

  @IsString()
  @IsOptional()
  rank?: string;

  @IsString()
  @IsOptional()
  division?: string;

  @IsString()
  @IsOptional()
  gameId?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  page?: number = 1;

  @IsNumber()
  @IsOptional()
  limit: number = 10;
}
