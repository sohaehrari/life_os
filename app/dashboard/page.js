"use client";

import { useEffect, useState } from "react";
import { getGoals } from "@/lib/storage";

import CreateUser from "@/components/dashboard/CreateUser";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import TodayTasks from "@/components/dashboard/TodayTasks";
import UpcomingDeadlines from "@/components/dashboard/UpComingdedlines";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================================
  // LOAD USER + GOALS
  // ================================

  useEffect(() => {
    const savedUser = localStorage.getItem("lifeos-user");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to load user:", error);
        localStorage.removeItem("lifeos-user");
      }
    }

    const storedGoals = getGoals();
    setGoals(storedGoals || []);

    setLoading(false);
  }, []);

  // ================================
  // GOAL FILTERS
  // ================================

  const activeGoals = goals.filter(
    (goal) =>
      goal.status !== "Completed" &&
      Number(goal.progress || 0) < 100
  );

  const completedGoals = goals.filter(
    (goal) =>
      goal.status === "Completed" ||
      Number(goal.progress || 0) >= 100
  );

  const notStartedGoals = goals.filter(
    (goal) =>
      goal.status === "Not started" &&
      Number(goal.progress || 0) === 0
  );

  const totalGoals = goals.length;

  // ================================
  // OVERALL PROGRESS
  // ================================

  const overallProgress =
    totalGoals > 0
      ? Math.round(
          goals.reduce(
            (total, goal) =>
              total + Number(goal.progress || 0),
            0
          ) / totalGoals
        )
      : 0;

  // ================================
  // ACTIVE GOALS PROGRESS
  // ================================

  const activeProgress =
    activeGoals.length > 0
      ? Math.round(
          activeGoals.reduce(
            (total, goal) =>
              total + Number(goal.progress || 0),
            0
          ) / activeGoals.length
        )
      : 0;

  // ================================
  // LOADING
  // ================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-indigo-600" />

          <p className="text-center text-sm font-medium text-zinc-500">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  // ================================
  // NO USER
  // ================================

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-8 sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
              👋
            </div>

            <h1 className="mt-5 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
              Welcome to LifeOS
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Let&apos;s set up your LifeOS profile and start
              organizing your life.
            </p>

          </div>

          <div className="mt-7 sm:mt-8">
            <CreateUser onUserCreated={setUser} />
          </div>

        </div>
      </main>
    );
  }

  // ================================
  // DASHBOARD
  // ================================

  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-50">

      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">

        {/* =========================
            HEADER
        ========================= */}

        <DashboardHeader user={user} />

        {/* =========================
            STATS
        ========================= */}

        <section className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {/* TOTAL GOALS */}

          <StatCard
            title="Total Goals"
            value={totalGoals}
            description="All your goals"
            trend=""
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          {/* ACTIVE GOALS */}

          <StatCard
            title="Active Goals"
            value={activeGoals.length}
            description={`${activeProgress}% average progress`}
            trend=""
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />

          {/* NOT STARTED */}

          <StatCard
            title="Not Started"
            value={notStartedGoals.length}
            description="Goals waiting to begin"
            trend=""
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          {/* COMPLETED */}

          <StatCard
            title="Completed"
            value={completedGoals.length}
            description={`${overallProgress}% overall progress`}
            trend=""
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
          />

        </section>

        {/* =========================
            ACTIVE GOALS
        ========================= */}

        <section className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">

          {/* HEADER */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="min-w-0">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-500 sm:text-xs">
                Progress
              </p>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                Active Goals
              </h2>

              <p className="mt-1 text-sm leading-6 text-zinc-500">
                Goals you are currently working toward.
              </p>

            </div>

            <span className="w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
              {activeGoals.length}{" "}
              {activeGoals.length === 1 ? "Goal" : "Goals"}
            </span>

          </div>

          {/* ACTIVE GOALS */}

          {activeGoals.length === 0 ? (

            <div className="mt-6 rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-7 text-center sm:p-10">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-zinc-700">
                No active goals
              </h3>

              <p className="mt-1 text-xs text-zinc-400">
                Create a goal to start making progress.
              </p>

            </div>

          ) : (

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">

              {activeGoals.slice(0, 6).map((goal) => (
                <DashboardGoalCard
                  key={goal.id}
                  goal={goal}
                />
              ))}

            </div>

          )}

        </section>

        {/* =========================
            OVERALL PROGRESS
        ========================= */}

        <section className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="min-w-0">

              <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                Overall Progress
              </h2>

              <p className="mt-1 text-sm leading-6 text-zinc-500">
                Your progress across all goals.
              </p>

            </div>

            <span className="text-xl font-bold text-indigo-600 sm:text-lg">
              {overallProgress}%
            </span>

          </div>

          <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-zinc-100 sm:h-3">

            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700"
              style={{
                width: `${Math.min(
                  100,
                  Math.max(0, overallProgress)
                )}%`,
              }}
            />

          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-zinc-400 sm:text-xs">

            <span className="truncate">
              {completedGoals.length} completed
            </span>

            <span className="truncate text-right">
              {totalGoals} total goals
            </span>

          </div>

        </section>

        {/* =========================
            TASKS + DEADLINES
        ========================= */}

        <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <TodayTasks />

          <UpcomingDeadlines />

        </section>

      </div>

    </main>
  );
}


/* =========================================
   DASHBOARD GOAL CARD
========================================= */

function DashboardGoalCard({ goal }) {
  const priority = goal.priority || "medium";

  const priorityStyles = {
    high:
      "border-red-400/20 bg-red-400/10 text-red-500",

    medium:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-600",

    low:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-500",
  };

  const progress = Math.min(
    100,
    Math.max(0, Number(goal.progress || 0))
  );

  return (
    <div className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md sm:p-5">

      {/* TOP */}

      <div className="flex min-w-0 items-center justify-between gap-3">

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${
            priorityStyles[priority] ||
            priorityStyles.medium
          }`}
        >
          {priority}
        </span>

        <span className="truncate text-[10px] capitalize text-zinc-400 sm:text-xs">
          {goal.category || "other"}
        </span>

      </div>

      {/* TITLE */}

      <h3 className="mt-5 truncate text-base font-semibold text-zinc-900 sm:text-lg">
        {goal.title}
      </h3>

      {/* DESCRIPTION */}

      {goal.description && (
        <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500 sm:text-sm">
          {goal.description}
        </p>
      )}

      {/* PROGRESS */}

      <div className="mt-5">

        <div className="mb-2 flex items-center justify-between gap-3">

          <span className="text-[11px] text-zinc-500 sm:text-xs">
            Progress
          </span>

          <span className="text-[11px] font-bold text-indigo-600 sm:text-xs">
            {progress}%
          </span>

        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* BOTTOM INFO */}

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-zinc-200 pt-4 min-[400px]:grid-cols-2">

        <div className="min-w-0">

          <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-400 sm:text-[10px]">
            Status
          </p>

          <p className="mt-1 truncate text-xs font-medium text-zinc-600">
            {goal.status || "Not started"}
          </p>

        </div>

        {goal.deadline && (
          <div className="min-w-0 min-[400px]:text-right">

            <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-400 sm:text-[10px]">
              Deadline
            </p>

            <p className="mt-1 truncate text-xs font-medium text-zinc-600">
              {goal.deadline}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}
