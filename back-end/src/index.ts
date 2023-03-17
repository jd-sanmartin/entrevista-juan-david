import { messagesRouter } from './routes/messages/index.js';
import express from 'express';
import cors from 'cors';

import MessageRepository from './repositories/MessageRepository.js';

const app = express();
const port = 3000;
const FRONT_END_PORT = 5173;

const messageRepository = new MessageRepository();

app.use(cors({
  origin: `http://localhost:${FRONT_END_PORT}`
}));

app.use(express.json());

app.use("/messages", messagesRouter(messageRepository))

app.get('/', (req, res) => {
  res.send('Please use the "messages/" route');
});

app.listen(port, () => console.log(`The app is running on port ${port}`));
