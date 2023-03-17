import { IMessage } from "../../utils/api";

interface TextLogsProps {
  messages: IMessage[];
}

export default function TextLogs({ messages }: TextLogsProps) {
  return (
    <ul>
      {
        messages.map(({ message }, i) => (
          <li key={`message-${i}`}>
            { message }
          </li>
        ))
      }
    </ul>
  )
}