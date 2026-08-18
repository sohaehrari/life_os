"use client";

import { useState } from "react";

export default function CreateUser({ onUserCreated }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    const newUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      streak: 0,
    };

    localStorage.setItem(
      "lifeos-user",
      JSON.stringify(newUser)
    );

    onUserCreated(newUser);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        placeholder="Write your name..."
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none"
      />

      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black"
      >
        Start LifeOS
      </button>
    </form>
  );
}