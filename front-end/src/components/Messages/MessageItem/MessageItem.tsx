import IMessage from "../../../utils/interfaces/IMessage";
import './MessageItem.css';

interface MessageItemProps {
  message: IMessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  const { text } = message;

  return (
    <div className='message-item__container'>
      { text }
    </div>
  );
}
