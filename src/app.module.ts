import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [HealthModule, PostModule],
})
export class AppModule {}
