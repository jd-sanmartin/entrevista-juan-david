import { useRef, useEffect } from 'react';

import { IMessage } from "../../utils/api";
import MessageItem from "./MessageItem/MessageItem";

import './Messages.css';

interface TextLogsProps {
  messages: IMessage[];
}

export default function Messages({ messages }: TextLogsProps) {
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