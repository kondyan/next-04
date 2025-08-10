import { getMessages } from "@/lib/messages";
import { ReactNode } from "react";

export default async function MessagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "X-ID": "layout",
  //   },
  // });
  // const messages = await response.json();
  // const totalMessages = messages.length;

  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
