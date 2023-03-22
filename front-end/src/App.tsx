import { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import Messages from './components/Messages/Messages';

import IMessage from './utils/interfaces/IMessage';
import { fetchMessages, submitMessage } from './utils/api';

import './App.css';

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const messages = await fetchMessages();
        setMessages(messages);
      } catch(ex) {
        setErrorText('An error has occurred');
      }
    })();
  }, []);

  const onSubmit = async (message: IMessage) => {
    setErrorText('');

    try {
      const messages = await submitMessage(message);
      setMessages(messages);
    } catch (ex) {
      setErrorText('An error has occurred');
    }
  };

  return (
    <>
      <Form {...{ onSubmit, errorText }} />
      <Messages {...{ messages }} />
    </>
  )
}

export default App;
