import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT ?? 4000;

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.send('Server is running...');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} 🚀`);
});
