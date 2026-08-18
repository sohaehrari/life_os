import { useState } from "react";

export default function TodayTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish dashboard design",
      category: "Design",
      completed: true,
    },
    {
      id: 2,
      title: "Review project requirements",
      category: "Planning",
      completed: false,
    },
    {
      id: 3,
      title: "Complete React components",
      category: "Development",
      completed: false,
    },
    {
      id: 4,
      title: "Prepare project presentation",
      category: "Presentation",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Today's Tasks
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Focus on your priorities for today
          </p>
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
          {completedTasks}/{tasks.length}
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-slate-50"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
                task.completed
                  ? "border-indigo-600 bg-indigo-600"
                  : "border-slate-300 bg-white hover:border-indigo-500"
              }`}
            >
              {task.completed && (
                <svg
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>

            <div className="min-w-0 flex-1">
              <p
                className={`text-sm font-medium ${
                  task.completed
                    ? "text-slate-400 line-through"
                    : "text-slate-800"
                }`}
              >
                {task.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {task.category}
              </p>
            </div>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 12h.01M12 12h.01M18 12h.01"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 p-4">
        <button className="w-full rounded-xl border border-dashed border-slate-300 py-3 text-sm font-medium text-slate-500 transition hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600">
          + Add new task
        </button>
      </div>
    </div>
  );
}