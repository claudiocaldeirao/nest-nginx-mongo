import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, PostModule],
})
export class AppModule {}
