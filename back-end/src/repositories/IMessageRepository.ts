export interface IMessage {
  message: string;
}

export default interface IMessageRepository {
  getAll(): IMessage[];
  add(message: IMessage): void;
}