import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.API_PORT);
}
bootstrap();
