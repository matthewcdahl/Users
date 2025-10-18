// src/components/DeleteButton.tsx
"use client";

import { deleteUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteUser(id);
    router.refresh(); // Reload users after delete
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Delete
    </button>
  );
}
