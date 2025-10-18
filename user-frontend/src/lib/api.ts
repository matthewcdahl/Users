// src/lib/api.ts
const BASE_URL = "http://localhost:8080/users";

export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function deleteUser(id: number) {
    console.log("MD ID: " + id);
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete user");
  }
}