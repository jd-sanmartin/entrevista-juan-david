import { Router, Request, Response } from "express";

import IMessageRepository from "../../repositories/IMessageRepository.js";

export const messagesRouter = (messageRepository: IMessageRepository) => {
  const router = Router();
  
  router.get("/", (req: Request, res: Response) => {
    const messages = messageRepository.getAll();
    res.send(messages);
  });
  
  router.post("/", (req: Request, res: Response) => {
    const message = req.body;
    messageRepository.add(message);

    const messages = messageRepository.getAll();
    res.send(messages);
  });

  return router;
};
