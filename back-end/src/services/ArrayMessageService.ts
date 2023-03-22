import CreateMessageDto from '../dtos/message/CreateMessageDto.js';
import ArrayMessageRepository from '../repositories/ArrayMessageRepository.js';
import IMessageService from './IMessageService.js';

export default class ArrayMessageService implements IMessageService {
  private messageRepository: ArrayMessageRepository;
  
  constructor() {
    this.messageRepository = new ArrayMessageRepository();
  }

  add = async (message: CreateMessageDto) => {
    await this.messageRepository.add(message);
  };

  getAll = async () => {
    return await this.messageRepository.getAll();
  }
}
