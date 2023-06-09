import CreateMessageDto from "../dtos/message/CreateMessageDto.js";
import ReadMessageDto from "../dtos/message/ReadMessageDto.js";

export default interface IMessageRepository {
  add(message: CreateMessageDto): void;
  getAll(): ReadMessageDto[];
}
