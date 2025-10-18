// src/app/page.tsx
import { fetchUsers } from "@/lib/api";
import DeleteButton from "@/components/DeleteButton";

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user: any) => (
            <li
              key={user.id}
              className="p-5 rounded-lg shadow-md bg-white border border-gray-300 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">ID: {user.id}</p>
              </div>
              <DeleteButton id={user.id} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
