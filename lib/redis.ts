import { Redis } from "@upstash/redis";

// @ts-ignore
export const redis = new Redis({
    url: 'https://fleet-warthog-59677.upstash.io',
    token: 'AekdAAIjcDE0YjRlMmJlYzI3MjY0Mzc2OTJjZTJiYjc2MzQ0YjFkNHAxMA',
  })