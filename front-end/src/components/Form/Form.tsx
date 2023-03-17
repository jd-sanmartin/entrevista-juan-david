import { useRef } from 'react';
import { IMessage } from '../../utils/api';

export interface FormProps {
  onSubmit: (value: IMessage) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = inputRef.current?.value;

    if (!message) {
      return;
    }
    
    onSubmit({ message });
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Send</button>
    </form>
  );
};