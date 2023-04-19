import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (req: VercelRequest, response: VercelResponse) => {
  let date: String = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  }).format(new Date());
  
  response.status(200).send(date);

  return date;
};
