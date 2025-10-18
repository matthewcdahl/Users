"use client";

export default function UserList({ users = [], onRefresh, onSelect }) {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const deleteUser = async (id) => {
    if (!confirm("Delete user?")) return;
    try {
      const res = await fetch(`${backend}/users/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      onRefresh();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="mt-6">
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="p-2 border rounded flex justify-between items-center">
              <div>
                <strong>{u.name}</strong> — {u.email}
              </div>
              <div className="space-x-2">
                <button onClick={() => onSelect?.(u.id)} className="text-sm">Select</button>
                <button onClick={() => deleteUser(u.id)} className="text-red-600 text-sm">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}