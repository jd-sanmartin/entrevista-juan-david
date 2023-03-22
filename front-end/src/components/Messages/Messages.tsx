import { useRef, useEffect } from 'react';

import IMessage from "../../utils/interfaces/IMessage";
import MessageItem from "./MessageItem/MessageItem";

import './Messages.css';

interface MessagesProps {
  messages: IMessage[];
}

export default function Messages({ messages }: MessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className='messages__container'>
      {
        messages.map((message, i) => (
          <MessageItem key={`message-${i}`} {...{message}} />
        ))
      }

      <div ref={bottomRef}></div>
    </div>
  )
}
