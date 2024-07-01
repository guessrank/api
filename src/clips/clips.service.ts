import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clip } from '../schemas/clip.schema';
import { CreateClipDto } from './dto/create-clip.dto';
@Injectable()
export class ClipsService {
  constructor(@InjectModel(Clip.name) private clipModel: Model<Clip>) {}

  /**
   * Create a new clip in the database
   * @param payload - The clip to create
   * @returns The created clip
   */
  async create(payload: CreateClipDto): Promise<Clip> {
    const createdClip = new this.clipModel(payload);
    return createdClip.save();
  }

  /**
   * Get all clips from the database
   * @returns All clips
   */
  async findAll(): Promise<Clip[]> {
    return this.clipModel.find().exec();
  }
}
