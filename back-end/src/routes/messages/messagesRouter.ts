import { Router, Request, Response } from "express";

import IMessageService from "../../services/IMessageService.js";

export const messagesRouter = (messageService: IMessageService) => {
  const router = Router();
  
  router.get("/", async (req: Request, res: Response) => {
    try {
      const messages = await messageService.getAll();
      res.send(messages);
    } catch (error) {
      console.error({error});
      res.status(500).send("An error occurred while retrieving messages.");
    }
  });
  
  router.post("/", async (req: Request, res: Response) => {
    try {
      const message = req.body;
      await messageService.add(message);

      const messages = await messageService.getAll();
      res.send(messages);
    } catch (error) {
      console.error({error});
      res.status(500).send("An error occurred while adding a message.");
    }
  });

  return router;
};
