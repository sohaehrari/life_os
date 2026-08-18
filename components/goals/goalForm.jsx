"use client";

import { useState } from "react";
import { addGoal } from "../../lib/storage";

export default function GoalForm({ onGoalCreated }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "learning",
    deadline: "",
    priority: "medium",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    const newGoal = addGoal({
      ...form,
      progress: 0,
      status: "Not started",
    });

    setForm({
      title: "",
      description: "",
      category: "learning",
      deadline: "",
      priority: "medium",
    });

    if (onGoalCreated) {
      onGoalCreated(newGoal);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl shadow-black/30">

      {/* Header */}
      <div className="mb-7">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Goal planner
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white">
          Create a Goal
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Turn your ideas into clear, achievable goals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* =========================================
            TITLE
        ========================================== */}

        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Goal title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Learn React"
            className="w-full rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 transition duration-200 hover:border-white/20 focus:border-blue-500 focus:bg-[#243044] focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        {/* =========================================
            DESCRIPTION
        ========================================== */}

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="What do you want to accomplish?"
            className="w-full resize-none rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-gray-500 transition duration-200 hover:border-white/20 focus:border-blue-500 focus:bg-[#243044] focus:ring-4 focus:ring-blue-500/10"
          />
        </div>

        {/* =========================================
            CATEGORY + PRIORITY
        ========================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Category
            </label>

            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3.5 text-sm text-white outline-none transition hover:border-white/20 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option value="learning">
                Learning
              </option>

              <option value="career">
                Career
              </option>

              <option value="health">
                Health
              </option>

              <option value="finance">
                Finance
              </option>

              <option value="personal">
                Personal
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label
              htmlFor="priority"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3.5 text-sm text-white outline-none transition hover:border-white/20 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option value="low">
                Low
              </option>

              <option value="medium">
                Medium
              </option>

              <option value="high">
                High
              </option>
            </select>
          </div>

        </div>

        {/* =========================================
            DEADLINE
        ========================================== */}

        <div>
          <label
            htmlFor="deadline"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Deadline
          </label>

          <input
            id="deadline"
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#1f2937] px-4 py-3.5 text-sm text-white outline-none transition hover:border-white/20 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 [color-scheme:dark]"
          />
        </div>

        {/* =========================================
            DIVIDER
        ========================================== */}

        <div className="border-t border-white/10 pt-5">

          {/* Submit */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98]"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>

            Create Goal
          </button>

        </div>

      </form>

      {/* Bottom Hint */}
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-blue-500/10 bg-blue-500/5 p-3.5">
        <svg
          className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01" />
          <path d="M11 12h1v4h1" />
        </svg>

        <p className="text-xs leading-5 text-gray-400">
          Set a realistic deadline and priority to make
          your goal easier to track.
        </p>
      </div>

    </div>
  );
}