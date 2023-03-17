import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form/Form';
import Messages from './components/Messages/Messages';
import { IMessage } from './utils/api';

import { fetchMessages, submitMessage } from './utils/api';

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    (async () => {
      try{
        setMessages(await fetchMessages());
      } catch(ex) {
        setErrorText('An error has occurred');
      }
    })();
  }, []);

  const onSubmit = async (message: IMessage) => {
    setErrorText('');
    try {
      setMessages(await submitMessage(message));
    } catch (ex) {
      setErrorText('An error has occurred');
    }
  };

  return (
    <>
      <Form {...{onSubmit, errorText}} />
      <Messages {...{messages}} />
    </>
  )
}

export default App;
