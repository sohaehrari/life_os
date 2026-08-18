"use client";

import { useState } from "react";
import { updateGoal, deleteGoal } from "../../lib/storage";

export default function GoalCards({
  goals,
  onGoalUpdated,
  onGoalDeleted,
}) {
  const [isEditing, setIsEditing] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    category: "learning",
    deadline: "",
    priority: "medium",
  });

  const [formError, setFormError] = useState("");

  function startEditing(goal) {
    setIsEditing(goal.id);
    setFormError("");

    setEditForm({
      title: goal.title || "",
      description: goal.description || "",
      category: goal.category || "learning",
      deadline: goal.deadline || "",
      priority: goal.priority || "medium",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formError) {
      setFormError("");
    }
  }

  function handleUpdate(e, goalId) {
    e.preventDefault();

    if (!editForm.title.trim()) {
      setFormError(
        "Goal title is empty. Please enter a goal title."
      );
      return;
    }

    if (!editForm.description.trim()) {
      setFormError(
        "Description is empty. Please enter a description."
      );
      return;
    }

    if (!editForm.category) {
      setFormError(
        "Category is empty. Please select a category."
      );
      return;
    }

    if (!editForm.priority) {
      setFormError(
        "Priority is empty. Please select a priority."
      );
      return;
    }

    if (!editForm.deadline) {
      setFormError(
        "Deadline is empty. Please select a deadline."
      );
      return;
    }

    const updatedGoal = updateGoal(goalId, {
      ...editForm,
    });

    setIsEditing(null);
    setFormError("");

    if (onGoalUpdated) {
      onGoalUpdated(updatedGoal);
    }
  }

  function handleDelete(goalId) {
    deleteGoal(goalId);

    setIsDeleting(null);

    if (onGoalDeleted) {
      onGoalDeleted(goalId);
    }
  }

  function handleProgressChange(goal, e) {
    const progress = Number(e.target.value);

    const status =
      progress === 100
        ? "Completed"
        : progress > 0
        ? "In progress"
        : "Not started";

    const updatedGoal = updateGoal(goal.id, {
      progress,
      status,
    });

    if (onGoalUpdated) {
      onGoalUpdated(updatedGoal);
    }
  }

  const priorityStyles = {
    low:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

    medium:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    high:
      "border-red-400/20 bg-red-400/10 text-red-400",
  };

  const statusStyles = {
    Completed:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

    "In progress":
      "border-blue-400/20 bg-blue-400/10 text-blue-400",

    "Not started":
      "border-white/10 bg-white/5 text-gray-400",
  };

  /*
   * ========================================
   * EMPTY STATE
   * ========================================
   */

  if (!goals || goals.length === 0) {
    return (
      <div className="w-full">

        {/* Header */}

        <div className="mb-5 sm:mb-6">

          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
              Progress
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Your Goals
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-400">
                Track your progress and keep moving forward.
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
              0 Goals
            </span>

          </div>
        </div>

        {/* Empty */}

        <div className="rounded-2xl border border-dashed border-white/10 bg-[#111318] px-5 py-10 text-center shadow-xl shadow-black/20 sm:rounded-3xl sm:p-12">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 sm:h-14 sm:w-14">

            <svg
              className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>

          </div>

          <h3 className="mt-5 text-base font-semibold text-white sm:text-lg">
            No goals yet
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Create your first goal and start turning your plans
            into progress.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0">

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="mb-5 sm:mb-6">

        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
            Progress
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Your Goals
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Track your progress and keep moving forward.
            </p>
          </div>

          <span className="w-fit rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
            {goals.length}{" "}
            {goals.length === 1 ? "Goal" : "Goals"}
          </span>

        </div>
      </div>

      {/* ========================================
          GOAL CARDS
      ======================================== */}

      <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-2">

        {goals.map((goal) => {
          const editing = isEditing === goal.id;

          /*
           * =====================================
           * EDIT CARD
           * =====================================
           */

          if (editing) {
            return (
              <div
                key={goal.id}
                className="min-w-0 rounded-2xl border border-yellow-400/20 bg-[#111318] p-4 shadow-xl shadow-black/20 sm:rounded-3xl sm:p-6"
              >

                {/* Edit Header */}

                <div className="mb-5 sm:mb-6">

                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    Edit Goal
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your goal details.
                  </p>

                </div>

                {/* Error */}

                {formError && (
                  <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 p-3 sm:p-4">

                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-400/10">
                      <svg
                        className="h-4 w-4 text-red-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <path d="M10.3 3.8 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-red-400">
                        Please complete this field
                      </p>

                      <p className="mt-1 text-xs leading-5 text-red-300/70">
                        {formError}
                      </p>
                    </div>

                  </div>
                )}

                {/* Form */}

                <form
                  onSubmit={(e) =>
                    handleUpdate(e, goal.id)
                  }
                  className="space-y-4 sm:space-y-5"
                >

                  {/* TITLE */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Goal title
                    </label>

                    <input
                      name="title"
                      type="text"
                      value={editForm.title}
                      onChange={handleChange}
                      placeholder="Enter your goal title"
                      className="w-full rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400/50 focus:ring-4 focus:ring-yellow-400/5"
                    />
                  </div>

                  {/* DESCRIPTION */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Description
                    </label>

                    <textarea
                      name="description"
                      value={editForm.description}
                      onChange={handleChange}
                      placeholder="Describe your goal..."
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400/50 focus:bg-[#20242b] focus:ring-4 focus:ring-yellow-400/5"
                    />
                  </div>

                  {/* CATEGORY + PRIORITY */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Category
                      </label>

                      <select
                        name="category"
                        value={editForm.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3.5 text-sm text-white outline-none transition focus:border-yellow-400/50 focus:ring-4 focus:ring-yellow-400/5"
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

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Priority
                      </label>

                      <select
                        name="priority"
                        value={editForm.priority}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3.5 text-sm text-white outline-none transition focus:border-yellow-400/50 focus:ring-4 focus:ring-yellow-400/5"
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

                  {/* DEADLINE */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Deadline
                    </label>

                    <input
                      name="deadline"
                      type="date"
                      value={editForm.deadline}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3.5 text-sm text-white outline-none transition focus:border-yellow-400/50 focus:ring-4 focus:ring-yellow-400/5 [color-scheme:dark]"
                    />
                  </div>

                  {/* BUTTONS */}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">

                    <button
                      type="submit"
                      className="min-h-[46px] flex-1 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 active:scale-[0.98]"
                    >
                      Save Changes
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(null);
                        setFormError("");
                      }}
                      className="min-h-[46px] flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                      Cancel
                    </button>

                  </div>
                </form>
              </div>
            );
          }

          /*
           * =====================================
           * NORMAL CARD
           * =====================================
           */

          return (
            <div
              key={goal.id}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-4 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:shadow-2xl hover:shadow-yellow-400/5 sm:rounded-3xl sm:p-6"
            >

              {/* Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-yellow-400/5 blur-3xl transition group-hover:bg-yellow-400/10" />

              {/* Top accent */}

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />

              {/* Header */}

              <div className="relative flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                <div className="min-w-0 flex-1">

                  <h3 className="break-words text-base font-semibold text-white sm:text-lg">
                    {goal.title}
                  </h3>

                  {goal.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                      {goal.description}
                    </p>
                  )}

                </div>

                <span
                  className={`w-fit shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px] ${
                    priorityStyles[goal.priority] ||
                    priorityStyles.medium
                  }`}
                >
                  {goal.priority || "medium"}
                </span>

              </div>

              {/* Tags */}

              <div className="relative mt-4 flex flex-wrap gap-2 sm:mt-5">

                <span className="rounded-full border border-yellow-400/10 bg-yellow-400/5 px-3 py-1 text-[11px] font-medium capitalize text-yellow-400 sm:text-xs">
                  {goal.category || "learning"}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-medium sm:text-xs ${
                    statusStyles[goal.status] ||
                    statusStyles["Not started"]
                  }`}
                >
                  {goal.status || "Not started"}
                </span>

              </div>

              {/* Progress */}

              <div className="relative mt-6 sm:mt-7">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-xs font-medium text-gray-400 sm:text-sm">
                    Progress
                  </span>

                  <span className="text-xs font-bold text-yellow-400 sm:text-sm">
                    {goal.progress || 0}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-lg shadow-yellow-400/20 transition-all duration-500"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          Number(goal.progress || 0)
                        )
                      )}%`,
                    }}
                  />

                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={goal.progress || 0}
                  onChange={(e) =>
                    handleProgressChange(goal, e)
                  }
                  className="mt-3 h-5 w-full cursor-pointer accent-yellow-400"
                />

              </div>

              {/* Info */}

              <div className="relative mt-4 grid grid-cols-1 gap-3 border-t border-white/5 pt-4 sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:pt-5">

                <div className="min-w-0">

                  <p className="text-[9px] font-medium uppercase tracking-wider text-gray-600 sm:text-[10px]">
                    Deadline
                  </p>

                  <p className="mt-1.5 truncate text-xs font-medium text-gray-300 sm:text-sm">
                    {goal.deadline || "No deadline"}
                  </p>

                </div>

                <div className="min-w-0 sm:text-right">

                  <p className="text-[9px] font-medium uppercase tracking-wider text-gray-600 sm:text-[10px]">
                    Created
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-gray-300 sm:text-sm">
                    {goal.createdAt
                      ? new Date(
                          goal.createdAt
                        ).toLocaleDateString()
                      : "Unknown"}
                  </p>

                </div>

              </div>

              {/* Actions */}

              <div className="relative mt-4 grid grid-cols-2 gap-3 sm:mt-5">

                <button
                  type="button"
                  onClick={() => startEditing(goal)}
                  className="min-h-[44px] rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-gray-300 transition hover:border-yellow-400/20 hover:bg-yellow-400/5 hover:text-yellow-400 sm:text-sm"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsDeleting(goal.id)
                  }
                  className="min-h-[44px] rounded-xl border border-red-400/10 bg-red-400/5 px-3 py-2.5 text-xs font-semibold text-red-400 transition hover:border-red-400/20 hover:bg-red-400/10 sm:text-sm"
                >
                  Delete
                </button>

              </div>

              {/* =====================================
                  DELETE MODAL
              ===================================== */}

              {isDeleting === goal.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">

                  <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#15171c] p-5 shadow-2xl shadow-black/50 sm:rounded-3xl sm:p-6">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-400/10 sm:h-12 sm:w-12">

                      <svg
                        className="h-5 w-5 text-red-400 sm:h-6 sm:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v5" />
                        <path d="M14 11v5" />
                      </svg>

                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
                      Delete this goal?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      This action cannot be undone. Your goal
                      will be permanently removed.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                      <button
                        type="button"
                        onClick={() =>
                          setIsDeleting(null)
                        }
                        className="min-h-[46px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(goal.id)
                        }
                        className="min-h-[46px] rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                      >
                        Delete Goal
                      </button>

                    </div>

                  </div>
                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}
