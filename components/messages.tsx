type Message = {
  id: string;
  text: string;
};

export default function Messages({ messages }: { messages: Message[] }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
