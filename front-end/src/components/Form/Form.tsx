import { useRef } from 'react';
import IMessage from '../../utils/interfaces/IMessage';

import './Form.css';

interface FormProps {
  onSubmit: (value: IMessage) => void;
  errorText: string;
}

export default function Form({ onSubmit, errorText }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    inputRef.current!.focus();
    const text = inputRef.current?.value;

    if (!text) {
      return;
    }
    
    onSubmit({ text });
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className='form__container'>
      <input className='form__textbox' type='text' placeholder='Type a message' ref={inputRef} />
      <button className='form__submit-button' type='submit'>Send</button>

      <div className='break-sm'></div> {/*Line break*/}

      {errorText && <p className='form__text-error'>{errorText}</p>}
    </form>
  );
};
