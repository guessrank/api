import { Injectable } from '@nestjs/common';
import { join } from 'path';

interface CompressImageParams {
  imageName: string;
  size: number;
  quality: number;
}

@Injectable()
export class ImagesService {
  async getCompressedImage(params: CompressImageParams): Promise<string> {
    const { imageName, size, quality } = params;
    const imagePath = join(__dirname, '..', 'public', imageName);
    return imagePath;
  }
}
