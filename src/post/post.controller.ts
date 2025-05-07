import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() body: { title: string; body: string; author: string }) {
    return this.postService.create(body);
  }

  @Get()
  findById(@Query('postId') postId: string) {
    return this.postService.findById(postId);
  }
}
