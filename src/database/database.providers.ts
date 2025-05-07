import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from 'src/common/contants';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      return await mongoose.connect(configService.get<string>('MONGO_URI'));
    },
    inject: [ConfigService],
  },
];
