import { Connection } from 'mongoose';
import { PostSchema } from './post.schema';
import { DATABASE_CONNECTION, POST_MODEL } from 'src/common/contants';

export const postProviders = [
  {
    provide: POST_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Post', PostSchema, 'posts'),
    inject: [DATABASE_CONNECTION],
  },
];
