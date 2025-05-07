db.createCollection('posts');

db.posts.createIndex({ author: 1 });
