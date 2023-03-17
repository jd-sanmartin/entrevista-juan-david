import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form/Form';
import Messages from './components/Messages/Messages';
import { IMessage } from './utils/api';

import { fetchMessages, submitMessage } from './utils/api';

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    (async () => {
      setMessages(await fetchMessages());
    })();
  }, []);

  const onSubmit = async (message: IMessage) => {
    setMessages(await submitMessage(message));
  };

  return (
    <>
      <Form {...{onSubmit}} />
      <Messages {...{messages}} />
    </>
  )
}

export default App;
