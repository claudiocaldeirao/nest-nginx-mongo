import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [HealthModule, PostsModule],
})
export class AppModule {}
