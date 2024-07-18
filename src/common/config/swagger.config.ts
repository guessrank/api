import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('GuessRank API')
  .setDescription('Oficial API for GuessRank.xyz')
  .setVersion('1.0')
  .addTag('games')
  .addTag('clips')
  .addTag('images')
  .addTag('ranks')
  .build();
