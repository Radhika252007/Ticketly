import Redis from 'ioredis';

const client = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null
});

client.on('connect', () => {
  console.log('Connected to Redis!');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

export const bullConnection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null
});

export default client;