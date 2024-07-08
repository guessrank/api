import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get(':imageName')
  async getCompressedImage(): Promise<string> {
    return this.imagesService.getCompressedImage({
      imageName: 'rocket-league.webp',
      size: 100,
      quality: 80,
    });
  }
}
