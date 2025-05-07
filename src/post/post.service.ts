import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts(): string {
    return '@todo: implement logics';
  }
}
