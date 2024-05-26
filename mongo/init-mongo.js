db.createCollection('restaurants');

db.restaurants.createIndex({ location: '2dsphere' });
