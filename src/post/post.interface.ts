import { Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  body: string;
  author: string;
  tags?: Array<any>;
  createdAt?: Date;
  updatedAt?: Date;
  likes?: number;
  comments?: Array<any>;
}
