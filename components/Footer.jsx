export default function Footer(){
    return(

<footer className="border-t border-white/[0.08]">

<div className="mx-auto max-w-5xl px-0 py-10 sm:py-12">

  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

    {/* Brand */}

    <div className="max-w-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-sm font-black text-black">
          L
        </div>

        <span className="text-lg font-bold tracking-tight text-white">
          LifeOS
        </span>

      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        A personal productivity and goal management
        application built with modern web technologies.
      </p>

    </div>


    {/* Navigation */}

    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">

      <a
        href="/"
        className="text-zinc-600 transition-colors duration-200 hover:text-white"
      >
        Home
      </a>

      <a
        href="/dashboard"
        className="text-zinc-600 transition-colors duration-200 hover:text-white"
      >
        Dashboard
      </a>

      <a
        href="/goals"
        className="text-zinc-600 transition-colors duration-200 hover:text-white"
      >
        Goals
      </a>

      <a
        href="/about"
        className="text-zinc-600 transition-colors duration-200 hover:text-white"
      >
        About
      </a>

    </nav>

  </div>


  {/* Bottom */}

  <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">

    <p className="text-xs text-zinc-700">
      © {new Date().getFullYear()} LifeOS. All rights reserved.
    </p>

    <p className="text-xs text-zinc-700">
      Built with Next.js · React · Tailwind CSS
    </p>

  </div>

</div>

</footer>
    )
}