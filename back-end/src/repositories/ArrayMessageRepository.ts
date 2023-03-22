import CreateMessageDTO from '../dtos/message/CreateMessageDto.js';
import ReadMessageDto from '../dtos/message/ReadMessageDto.js';
import IMessageRepository from './IMessageRepository.js';

// We create this interface in order to avoid conflicts with entities/Message
interface Message {
  text: string;
}

export default class MessageRepository implements IMessageRepository {
  private messages: Message[] = [];
  
  add(message: CreateMessageDTO): void {
    this.messages.push(message);
  }
  
  getAll(): ReadMessageDto[] {
    return this.messages;
  }
}
