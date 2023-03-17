import { IMessage } from "../../../utils/api";

interface MessageItemProps {
  message: IMessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  const { text } = message;

  return (
    <div>
      { text }
    </div>
  );
}