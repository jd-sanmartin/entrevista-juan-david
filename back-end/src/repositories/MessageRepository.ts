import IMessageRepository, { IMessage } from './IMessageRepository.js';

export default class MessageRepository implements IMessageRepository {
  private messages: IMessage[] = [];

  getAll(): IMessage[] {
    return this.messages;
  }
  add(message: IMessage): void {
    this.messages.push(message);
  }
}
