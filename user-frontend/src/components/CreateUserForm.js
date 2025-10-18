"use client";

import { useState } from "react";

export default function CreateUserForm({ onCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${backend}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("Create failed");
      setName("");
      setEmail("");
      onCreated?.();
    } catch (err) {
      console.error(err);
      alert("Create failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mb-4 space-y-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 mr-2"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" disabled={loading} className="p-2 bg-blue-600 text-white rounded">
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
