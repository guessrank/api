import { IsOptional, IsString } from 'class-validator';

export class GetGameDto {
  @IsString()
  @IsOptional()
  uniqueId?: string;
}
