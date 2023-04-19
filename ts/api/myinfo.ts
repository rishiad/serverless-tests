import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (req: VercelRequest, response: VercelResponse) => {
  response.setHeader('Content-Type', 'application/json');

  let resp = new Map();
  resp.set("ip", req.headers["x-real-ip"]);
  resp.set("user-aget", req.headers['user-agent']);
  resp.set("accept-language", req.headers['accept-language']);
  resp.set("github", "https://github.com/rishiad/")
  let data: String = JSON.stringify(Array.from(resp.entries()).reduce((o, [k, v]) => (o[k] = v, o), {}));
  response.status(200).send(data);

  return data;
};
