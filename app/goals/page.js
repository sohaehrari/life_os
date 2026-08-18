"use client";

import { useEffect, useState } from "react";

import GoalCards from "./goalCard";
import { getGoals } from "@/lib/storage";
import GoalForm from "@/components/goals/goalForm";

export default function GoalsPage() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const savedGoals = getGoals();
    setGoals(savedGoals || []);
  }, []);

  function handleGoalCreated(newGoal) {
    setGoals((prev) => [newGoal, ...prev]);
  }

  function handleGoalUpdated(updatedGoal) {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  }

  function handleGoalDeleted(goalId) {
    setGoals((prev) =>
      prev.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

        {/* =========================
            PAGE HEADER
        ========================= */}

        <header className="mb-7 sm:mb-9 lg:mb-10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400 sm:text-xs">
              Productivity
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Goal Tracker
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Create goals, stay focused, and track your progress
            from one simple workspace.
          </p>
        </header>

        {/* =========================
            FORM + GOALS
        ========================= */}

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">

          {/* =========================
              FORM
          ========================= */}

          <div className="w-full lg:col-span-1 lg:sticky lg:top-6">
            <GoalForm
              onGoalCreated={handleGoalCreated}
            />
          </div>

          {/* =========================
              GOALS
          ========================= */}

          <div className="min-w-0 lg:col-span-2">
            <GoalCards
              goals={goals}
              onGoalUpdated={handleGoalUpdated}
              onGoalDeleted={handleGoalDeleted}
            />
          </div>

        </div>
      </div>
    </main>
  );
}
