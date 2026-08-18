"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getGoals } from "@/lib/storage";

export default function Home() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = getGoals();
    setGoals(storedGoals || []);
  }, []);

  // ================================
  // ACTIVE GOALS
  // ================================

  const activeGoals = goals.filter(
    (goal) =>
      goal.status !== "Completed" &&
      Number(goal.progress || 0) < 100
  );

  // ================================
  // CATEGORIES
  // ================================

  const learningGoals = goals.filter(
    (goal) => goal.category === "learning"
  );

  const careerGoals = goals.filter(
    (goal) => goal.category === "career"
  );

  const healthGoals = goals.filter(
    (goal) => goal.category === "health"
  );

  const financeGoals = goals.filter(
    (goal) => goal.category === "finance"
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* =========================
            HERO
        ========================= */}

        <section className="py-12 sm:py-16 md:py-20 lg:py-24">

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs sm:tracking-[0.25em] md:text-sm">
            Your Personal Life OS
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="text-yellow-400">
              LifeOS
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Organize your goals, stay focused, and turn
            your plans into measurable progress.
          </p>

          <Link
            href="/dashboard"
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-yellow-300 active:scale-[0.98] sm:mt-8 sm:w-auto sm:px-7"
          >
            See Dashboard
            <span className="ml-2">→</span>
          </Link>

        </section>

        {/* =========================
            ACTIVE GOALS
        ========================= */}

        <section>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div className="min-w-0">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
                Overview
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Active Goals
              </h2>

              <p className="mt-1 text-sm leading-6 text-zinc-500">
                Goals you are currently working toward.
              </p>

            </div>

            <span className="w-fit rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-xs font-semibold text-yellow-400">
              {activeGoals.length}{" "}
              {activeGoals.length === 1 ? "Goal" : "Goals"}
            </span>

          </div>

          {activeGoals.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 p-6 text-center sm:p-8 md:p-10">

              <h3 className="text-lg font-semibold text-white">
                No active goals
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Create your first goal to start making progress.
              </p>

              <Link
                href="/goals"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 active:scale-[0.98] sm:w-auto"
              >
                Create Goal
                <span className="ml-2">+</span>
              </Link>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">

              {activeGoals.slice(0, 6).map((goal) => (
                <GoalPreview
                  key={goal.id}
                  goal={goal}
                />
              ))}

            </div>

          )}

        </section>

        {/* =========================
            CATEGORIES
        ========================= */}

        <section className="mt-12 sm:mt-16 md:mt-20">

          <div className="mb-6 sm:mb-7">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
              Categories
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Your Focus Areas
            </h2>

            <p className="mt-1 text-sm leading-6 text-zinc-500">
              Keep your goals organized by area of life.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

            <CategoryCard
              title="Learning"
              description="Skills, education and personal development."
              goals={learningGoals}
              color="blue"
            />

            <CategoryCard
              title="Career"
              description="Professional growth and career goals."
              goals={careerGoals}
              color="purple"
            />

            <CategoryCard
              title="Health"
              description="Health, fitness and personal wellbeing."
              goals={healthGoals}
              color="emerald"
            />

            <CategoryCard
              title="Finance"
              description="Money, savings and financial goals."
              goals={financeGoals}
              color="yellow"
            />

          </div>

        </section>

        {/* =========================
            QUICK ACTION
        ========================= */}

        <section className="mt-8 pb-12 sm:mt-12 sm:pb-16 md:mt-16 md:pb-20">

          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-400 p-5 text-black sm:rounded-3xl sm:p-7 md:p-9 lg:p-10">

            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-300/60 blur-3xl sm:h-56 sm:w-56" />

            <div className="relative">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 sm:text-xs">
                Quick Action
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                What will you accomplish today?
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-black/60 sm:text-base">
                Create a new goal and start turning your plans
                into real progress.
              </p>

              <Link
                href="/goals"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-zinc-800 active:scale-[0.98] sm:w-auto"
              >
                Add New Goal
                <span className="ml-2">+</span>
              </Link>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}


/* =========================================
   GOAL PREVIEW
========================================= */

function GoalPreview({ goal }) {
  const priority = goal.priority || "medium";
  const progress = Number(goal.progress || 0);

  const priorityStyles = {
    high: "border-red-400/20 bg-red-400/10 text-red-400",
    medium: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
    low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  };

  return (
    <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/[0.03] sm:p-5">

      {/* Priority */}

      <div className="flex min-w-0 items-center justify-between gap-3">

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${
            priorityStyles[priority] ||
            priorityStyles.medium
          }`}
        >
          {priority}
        </span>

        <span className="truncate text-[10px] capitalize text-zinc-600 sm:text-xs">
          {goal.category || "other"}
        </span>

      </div>

      {/* Title */}

      <h3 className="mt-5 truncate text-base font-semibold text-white sm:text-lg">
        {goal.title}
      </h3>

      {/* Description */}

      {goal.description && (
        <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500 sm:text-sm">
          {goal.description}
        </p>
      )}

      {/* Progress */}

      <div className="mt-5">

        <div className="mb-2 flex items-center justify-between gap-3">

          <span className="text-[11px] text-zinc-500 sm:text-xs">
            Progress
          </span>

          <span className="text-[11px] font-bold text-yellow-400 sm:text-xs">
            {progress}%
          </span>

        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full rounded-full bg-yellow-400 transition-all duration-500"
            style={{
              width: `${Math.min(100, Math.max(0, progress))}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}


/* =========================================
   CATEGORY CARD
========================================= */

function CategoryCard({
  title,
  description,
  goals,
  color,
}) {
  const colors = {
    blue: {
      dot: "bg-blue-400",
      text: "text-blue-400",
      border: "border-blue-400/20",
      bg: "bg-blue-400/10",
    },

    purple: {
      dot: "bg-purple-400",
      text: "text-purple-400",
      border: "border-purple-400/20",
      bg: "bg-purple-400/10",
    },

    emerald: {
      dot: "bg-emerald-400",
      text: "text-emerald-400",
      border: "border-emerald-400/20",
      bg: "bg-emerald-400/10",
    },

    yellow: {
      dot: "bg-yellow-400",
      text: "text-yellow-400",
      border: "border-yellow-400/20",
      bg: "bg-yellow-400/10",
    },
  };

  const style = colors[color];

  return (
    <div className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/20 sm:p-5">

      {/* Header */}

      <div className="flex min-w-0 items-start justify-between gap-3">

        <div className="min-w-0">

          <div className="flex items-center gap-2">

            <span
              className={`h-2 w-2 shrink-0 rounded-full ${style.dot}`}
            />

            <h3 className="truncate font-semibold text-white">
              {title}
            </h3>

          </div>

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            {description}
          </p>

        </div>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${style.border} ${style.bg} ${style.text}`}
        >
          {goals.length}
        </span>

      </div>

      {/* Goals */}

      <div className="mt-5 space-y-3">

        {goals.length === 0 ? (

          <div className="rounded-xl border border-dashed border-zinc-800 px-3 py-5 text-center sm:px-4">

            <p className="text-xs text-zinc-600">
              No goals in this category
            </p>

          </div>

        ) : (

          goals.slice(0, 3).map((goal) => {

            const priority = goal.priority || "medium";

            const priorityStyles = {
              high:
                "border-red-400/20 bg-red-400/10 text-red-400",

              medium:
                "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

              low:
                "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
            };

            const progress = Number(goal.progress || 0);

            return (
              <div
                key={goal.id}
                className="min-w-0 rounded-xl border border-zinc-800 bg-black p-3"
              >

                {/* Priority */}

                <div className="flex items-center justify-between gap-2">

                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider sm:text-[9px] ${
                      priorityStyles[priority] ||
                      priorityStyles.medium
                    }`}
                  >
                    {priority}
                  </span>

                  <span className="shrink-0 text-[10px] text-zinc-600">
                    {progress}%
                  </span>

                </div>

                {/* Goal */}

                <p className="mt-2 truncate text-xs font-medium text-zinc-200 sm:text-sm">
                  {goal.title}
                </p>

                {/* Progress */}

                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800">

                  <div
                    className={`h-full rounded-full ${style.dot} transition-all duration-500`}
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, progress)
                      )}%`,
                    }}
                  />

                </div>

              </div>
            );
          })

        )}

        {/* More Goals */}

        {goals.length > 3 && (
          <Link
            href="/goals"
            className={`block pt-1 text-center text-xs font-medium ${style.text} hover:underline`}
          >
            View all {goals.length} goals →
          </Link>
        )}

      </div>

    </div>
  );
}
