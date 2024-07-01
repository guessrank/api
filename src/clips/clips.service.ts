import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clip } from '../schemas/clip.schema';
import { CreateClipDto } from './dto/create-clip.dto';
import { GetClipDto } from './dto/get-clip.dto';
@Injectable()
export class ClipsService {
  constructor(@InjectModel(Clip.name) private clipModel: Model<Clip>) {}

  /**
   * Build the search options for the clips
   * @param query - The query to filter the clips
   * @returns The search options
   */
  private buildSearchOptions(query: GetClipDto): any {
    return {
      approved: query.approved,
      ...(query.gameId && { gameId: query.gameId }),
    };
  }

  /**
   * Create a new clip in the database
   * @param payload - The clip to create
   * @returns The created clip
   */
  async create(payload: CreateClipDto): Promise<String> {
    try {
      const createdClip = new this.clipModel(payload);
      await createdClip.save();
      return 'Clip created successfully';
    } catch (error) {
      if (error.code === 11000) throw new Error('Clip already exists');
      throw error;
    }
  }

  /**
   * Get all clips from the database
   * @param query - The query to filter the clips
   * @returns All clips
   */
  async findAll(query: GetClipDto): Promise<Clip[]> {
    return this.clipModel
      .find(this.buildSearchOptions(query))
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .select('-_id -__v')
      .exec();
  }

  /**
   * Get the total number of clips in the database
   * @param query - The query to filter the clips
   * @returns The total number of clips
   */
  async countAll(query: GetClipDto): Promise<number> {
    return this.clipModel.countDocuments(this.buildSearchOptions(query));
  }
}
