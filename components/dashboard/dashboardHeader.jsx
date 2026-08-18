import Link from "next/link"




export default function DashboardHeader({ user }) {
  return (
    <header>
      <p className="text-yellow-400">
        Welcome back
      </p>

      <h1 className="mt-2 text-3xl font-bold">
        Good morning, {user.name} 👋
      </h1>

      <p className="mt-2 text-zinc-500">
        Your LifeOS dashboard
      </p>
      <Link href="/"   className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
>Back
      </Link>

    

    </header>
  );
}