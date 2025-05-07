import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostService) {}

  @Get()
  getPostss(): string {
    return this.postsService.getPosts();
  }
}
