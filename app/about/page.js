"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07070a] text-white">
      <article className="mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">

        {/* ========================================
            HERO
        ======================================== */}

        <header className="border-b border-white/[0.08] pb-12 sm:pb-16 lg:pb-20">

          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-yellow-400 sm:w-8" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-[11px] sm:tracking-[0.3em]">
              Project Documentation
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-[-0.05em] sm:mt-7 sm:text-6xl lg:text-7xl">
            LifeOS
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            A modern personal productivity and goal management
            application built to help users organize objectives,
            manage progress, and structure their personal development.
          </p>

          {/* Technology tags */}

          <div className="mt-7 flex max-w-3xl flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {[
              "Next.js",
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "React Hooks",
              "Local Storage",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium text-zinc-500 sm:px-3.5 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>


        {/* ========================================
            PROJECT OVERVIEW
        ======================================== */}

        <AboutSection
          number="01"
          title="Project Overview"
        >
          <p>
            LifeOS is a web-based productivity application designed
            around personal goal management. It provides users with a
            centralized environment for creating goals, defining
            priorities, setting deadlines, and tracking progress.
          </p>

          <p className="mt-5 text-zinc-500">
            The application focuses on simplicity, usability, and
            responsive design while demonstrating how modern frontend
            technologies can be combined to create a complete
            interactive application.
          </p>
        </AboutSection>


        {/* ========================================
            CORE FUNCTIONALITY
        ======================================== */}

        <AboutSection
          number="02"
          title="Core Functionality"
        >
          <div className="space-y-7">

            <Feature
              title="Goal Management"
              text="Users can create, edit, and delete personal goals while maintaining important information such as descriptions, categories, priorities, and deadlines."
            />

            <Feature
              title="Progress Tracking"
              text="Each goal contains a dynamic progress value. Progress changes are reflected throughout the interface so users can clearly understand their current position."
            />

            <Feature
              title="Goal Organization"
              text="Goals can be organized into categories such as learning, career, health, finance, and personal development."
            />

            <Feature
              title="Dashboard"
              text="The dashboard provides a centralized overview of goals, progress, tasks, and upcoming deadlines."
            />

          </div>
        </AboutSection>


        {/* ========================================
            TECHNOLOGY STACK
        ======================================== */}

        <AboutSection
          number="03"
          title="Technology Stack"
        >
          <div className="divide-y divide-white/[0.07]">

            <Technology
              name="Next.js"
              description="Used as the primary React framework for application structure, routing, and page development."
            />

            <Technology
              name="React.js"
              description="Used to build the interface through reusable and independent components."
            />

            <Technology
              name="JavaScript"
              description="Handles application logic, state updates, form interactions, filtering, validation, and dynamic behavior."
            />

            <Technology
              name="Tailwind CSS"
              description="Provides the responsive visual system including layouts, spacing, typography, colors, borders, and interactive states."
            />

            <Technology
              name="React Hooks"
              description="useState and useEffect are used for component state, client-side data loading, and interactive behavior."
            />

            <Technology
              name="localStorage"
              description="Provides client-side persistence for user and goal information without requiring an external database."
            />

          </div>
        </AboutSection>


        {/* ========================================
            ARCHITECTURE
        ======================================== */}

        <AboutSection
          number="04"
          title="Architecture"
        >
          <p>
            LifeOS follows a component-based architecture. Different
            parts of the application are separated into reusable React
            components rather than placing the entire interface and
            functionality inside a single file.
          </p>

          <p className="mt-5 text-zinc-500">
            The project also separates data management from the user
            interface through storage utility functions. This makes
            operations such as creating, retrieving, updating, and
            deleting goals easier to maintain.
          </p>

          <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Application Structure
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              <ArchitectureItem
                title="Pages"
                text="Application routes and page-level interfaces."
              />

              <ArchitectureItem
                title="Components"
                text="Reusable interface and feature components."
              />

              <ArchitectureItem
                title="Storage"
                text="Client-side data operations and persistence."
              />

              <ArchitectureItem
                title="State"
                text="Dynamic UI state managed with React Hooks."
              />

            </div>
          </div>
        </AboutSection>


        {/* ========================================
            DATA MANAGEMENT
        ======================================== */}

        <AboutSection
          number="05"
          title="Data Management"
        >
          <p>
            The current version of LifeOS uses the browser&apos;s
            localStorage API to persist information on the client side.
          </p>

          <p className="mt-5 text-zinc-500">
            This approach allows user and goal information to remain
            available after refreshing or reopening the application
            while keeping the project simple and independent from a
            backend database.
          </p>

          <div className="mt-8 border-l border-yellow-400/40 pl-4 sm:pl-5">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Data Operations
            </p>

            <p className="mt-2 text-sm font-medium text-zinc-300 sm:text-base">
              Create · Read · Update · Delete
            </p>

          </div>
        </AboutSection>


        {/* ========================================
            DEVELOPMENT APPROACH
        ======================================== */}

        <AboutSection
          number="06"
          title="Development Approach"
        >
          <p>
            The project applies modern frontend development practices
            including reusable components, state management, client-side
            data persistence, form validation, dynamic rendering, and
            responsive design.
          </p>

          <p className="mt-5 text-zinc-500">
            The interface is designed to work across mobile, tablet,
            laptop, and large desktop displays while maintaining a
            consistent visual language throughout the application.
          </p>
        </AboutSection>


        {/* ========================================
            FUTURE DEVELOPMENT
        ======================================== */}

        <AboutSection
          number="07"
          title="Future Development"
        >
          <p>
            LifeOS has been structured so that additional functionality
            can be introduced as the project evolves.
          </p>

          <p className="mt-5 text-zinc-500">
            Possible future improvements include user authentication,
            a cloud database, data synchronization, notifications,
            analytics, advanced task management, and cross-device
            persistence.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            <FutureItem text="User authentication" />
            <FutureItem text="Cloud database" />
            <FutureItem text="Cross-device synchronization" />
            <FutureItem text="Productivity analytics" />
            <FutureItem text="Notifications" />
            <FutureItem text="Advanced task management" />

          </div>
        </AboutSection>


        {/* ========================================
            PROJECT PURPOSE
        ======================================== */}

        <AboutSection
          number="08"
          title="Project Purpose"
          last
        >
          <p className="text-base leading-8 text-zinc-300 sm:text-lg">
            LifeOS was developed as a practical application of modern
            frontend development concepts.
          </p>

          <p className="mt-5">
            The project demonstrates how Next.js, React.js, JavaScript,
            Tailwind CSS, React Hooks, and browser storage can work
            together to create a functional, responsive, and
            maintainable productivity application.
          </p>
        </AboutSection>


        {/* ========================================
            PROFESSIONAL FOOTER
        ======================================== */}

        <footer className="mt-2 border-t border-white/[0.08] pt-8 sm:pt-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />

                <span className="text-sm font-semibold text-white">
                  LifeOS
                </span>
              </div>

              <p className="mt-2 max-w-md text-xs leading-6 text-zinc-600 sm:text-sm">
                Personal productivity and goal management platform
                built with modern frontend technologies.
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Project Documentation
              </p>

              <p className="mt-2 text-xs text-zinc-700">
                Next.js · React · Tailwind CSS
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-white/[0.05] pt-5">

            <p className="text-[11px] leading-5 text-zinc-700">
              LifeOS · Personal Productivity & Goal Management
            </p>

          </div>

        </footer>

      </article>
    </main>
  );
}


/* ========================================
   ABOUT SECTION
======================================== */

function AboutSection({
  number,
  title,
  children,
  last = false,
}) {
  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 ${
        !last ? "border-b border-white/[0.08]" : ""
      }`}
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">

        {/* Section label */}

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {number}
          </p>

          <h2 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
            {title}
          </h2>
        </div>

        {/* Content */}

        <div className="min-w-0 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          {children}
        </div>

      </div>
    </section>
  );
}


/* ========================================
   FEATURE
======================================== */

function Feature({ title, text }) {
  return (
    <div className="border-l border-white/10 pl-4 sm:pl-5">

      <h3 className="text-sm font-semibold text-white sm:text-base">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-zinc-500">
        {text}
      </p>

    </div>
  );
}


/* ========================================
   TECHNOLOGY
======================================== */

function Technology({ name, description }) {
  return (
    <div className="py-5 first:pt-0 last:pb-0 sm:py-6">

      <div className="grid gap-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[170px_minmax(0,1fr)]">

        <h3 className="text-sm font-semibold text-white">
          {name}
        </h3>

        <p className="text-sm leading-7 text-zinc-500">
          {description}
        </p>

      </div>

    </div>
  );
}


/* ========================================
   ARCHITECTURE ITEM
======================================== */

function ArchitectureItem({ title, text }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">

      <h3 className="text-sm font-semibold text-zinc-300">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-zinc-600">
        {text}
      </p>

    </div>
  );
}


/* ========================================
   FUTURE ITEM
======================================== */

function FutureItem({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">

      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />

      <span className="text-xs text-zinc-500 sm:text-sm">
        {text}
      </span>

    </div>
  );
}
