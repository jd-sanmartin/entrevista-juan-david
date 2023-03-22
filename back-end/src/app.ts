import express from 'express';
import cors from 'cors';

import { messagesRouter } from './routes/messages/messagesRouter.js';

import PostgresMessageService from './services/PostgresMessageService.js';
import ArrayMessageService from './services/ArrayMessageService.js';

const app = express();
const port = 3000;
const FRONT_END_PORT = 5173;

// MessageService instance that will be used to inject the dependency into the messages Router
const messageService = new ArrayMessageService();

app.use(cors({
  origin: `http://localhost:${FRONT_END_PORT}`
}));

app.use(express.json());

app.use("/messages", messagesRouter(messageService));

app.get('/', (req, res) => {
  res.send('Please use the "messages/" route');
});

app.listen(port, () => console.log(`The app is running on port ${port}`));
