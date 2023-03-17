export interface IMessage {
  text: string;
}

export default interface IMessageRepository {
  getAll(): IMessage[];
  add(message: IMessage): void;
}