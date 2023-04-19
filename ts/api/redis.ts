import type { VercelRequest, VercelResponse } from '@vercel/node';
const Redis = require("ioredis");


export default async (req: VercelRequest, response: VercelResponse) => {

    let client = new Redis("redis://default:9a23ee840f48427cb5b2fa2c1214f208@apn1-famous-terrier-33210.upstash.io:33210");
    client.set('foo', 'TypeScript');
    let foo = await client.get('foo');
  
  response.status(200).send(foo);

  return foo;
};


