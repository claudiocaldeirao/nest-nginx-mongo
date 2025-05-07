import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from 'src/common/contants';
import { config } from '../common/configuration';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        `mongodb://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.MONGO_URL}:${config.MONGO_PORT}/${config.MONGO_DATABASE}?authSource=${config.MONGO_AUTH_DATABASE}`,
      ),
  },
];
