import { Repository } from 'typeorm';
import { AppDataSource } from '../utils/data-source.js';
import { Message } from '../entities/Message.entity.js';

import CreateMessageDto from '../dtos/message/CreateMessageDto.js';
import IMessageService from './IMessageService.js';

export default class PostgresMessageService implements IMessageService {
  private messageRepository: Repository<Message>;

  constructor() {
    this.initializeDataSource();
  }

  private async initializeDataSource() {
    try {
      await AppDataSource.initialize();
      this.messageRepository = AppDataSource.getRepository(Message);
    } catch (error) {
      console.log('An error has occurred while initializing the database');
      console.log({ error });
    }
  }

  add = async (input: CreateMessageDto) => {
    await this.messageRepository.save(this.messageRepository.create(input));
  };

  getAll = async () => {
    return await this.messageRepository.find();
  }
}
