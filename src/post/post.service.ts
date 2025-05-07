import { Injectable, Inject } from '@nestjs/common';
import { Post } from './post.interface';
import { Model } from 'mongoose';
import { POST_MODEL } from 'src/common/contants';

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_MODEL)
    private postModel: Model<Post>,
  ) {}

  async create(data: {
    title: string;
    body: string;
    author: string;
  }): Promise<Post> {
    const post = new this.postModel(data);
    return post.save();
  }

  async findById(_id: string): Promise<Post> {
    return this.postModel.findOne({ _id }).exec();
  }

  async findByAuthor(author: string): Promise<Post[]> {
    return this.postModel
      .find({ author })
      .sort({ createdAt: -1 })
      .limit(50)
      .exec();
  }
}
