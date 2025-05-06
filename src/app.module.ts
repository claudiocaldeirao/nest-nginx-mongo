import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [HealthModule, RestaurantModule],
})
export class AppModule {}
