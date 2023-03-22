import CreateMessageDto from "../dtos/message/CreateMessageDto.js";
import ReadMessageDto from "../dtos/message/ReadMessageDto.js";

export default interface IMessageService {
  add(message: CreateMessageDto): Promise<void>;
  getAll(): Promise<ReadMessageDto[]>;
}
