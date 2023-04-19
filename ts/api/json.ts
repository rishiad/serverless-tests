import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (req: VercelRequest, response: VercelResponse) => {
  response.setHeader('Content-Type', 'application/json');

  let resp = new Map();
  resp.set("message", "Hello World from typescript! 🎉");
  resp.set("language", "TypeScript");
  resp.set("host", req.headers.host);
  resp.set("github", "https://github.com/rishiad/")
  let data: String = JSON.stringify(Array.from(resp.entries()).reduce((o, [k, v]) => (o[k] = v, o), {}));
  response.status(200).send(data);

  return data;
};
