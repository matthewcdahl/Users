"use client";

import { useEffect, useState } from "react";

export default function UserSummarySSE({ userId }) {
  const [text, setText] = useState("");
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!userId) return;
    setText("");
    const es = new EventSource(`${backend}/users/${userId}/ai-summary`);
    es.onmessage = (e) => setText((s) => s + e.data);
    es.onerror = () => es.close();
    return () => es.close();
  }, [userId]);

  if (!userId) return <div>Select a user to stream summary.</div>;

  return (
    <div className="mt-4 p-3 border rounded bg-gray-50">
      <pre className="whitespace-pre-wrap">{text}</pre>
    </div>
  );
}
