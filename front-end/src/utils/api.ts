export interface IMessage {
  text: string;
}

const API_MESSAGES_ENDPOINT = 'http://localhost:3000/messages/'

export async function fetchMessages(): Promise<IMessage[]> {
  const response = await fetch(API_MESSAGES_ENDPOINT);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data;
}

export async function submitMessage(message: IMessage): Promise<IMessage[]> {
  const response = await fetch(API_MESSAGES_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });

  if (!response.ok) {
    throw new Error('Failed to send data');
  }

  const data = await response.json();
  return data;
}