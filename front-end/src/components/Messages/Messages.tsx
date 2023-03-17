import { IMessage } from "../../utils/api";
import MessageItem from "./MessageItem/MessageItem";

interface TextLogsProps {
  messages: IMessage[];
}

export default function TextLogs({ messages }: TextLogsProps) {
  return (
    <div>
      {
        messages.map((message, i) => (
          <MessageItem {...{message}} />
        ))}
    </div>
  )
}