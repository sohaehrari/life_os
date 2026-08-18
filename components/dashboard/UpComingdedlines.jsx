const deadlines = [
    {
      id: 1,
      title: "Complete Project Report",
      date: "Today",
      time: "5:00 PM",
      priority: "High",
      color: "red",
    },
    {
      id: 2,
      title: "Submit Design Assignment",
      date: "Tomorrow",
      time: "10:00 AM",
      priority: "Medium",
      color: "amber",
    },
    {
      id: 3,
      title: "Team Meeting",
      date: "Aug 17",
      time: "2:00 PM",
      priority: "Low",
      color: "blue",
    },
    {
      id: 4,
      title: "Final Project Submission",
      date: "Aug 20",
      time: "11:59 PM",
      priority: "High",
      color: "red",
    },
  ];
  
  export default function UpcomingDeadlines() {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Upcoming Deadlines
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              Don't miss your important deadlines
            </p>
          </div>
  
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all
          </button>
        </div>
  
        <div className="divide-y divide-slate-100">
          {deadlines.map((deadline) => (
            <div
              key={deadline.id}
              className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-slate-50"
            >
              <div
                className={`h-10 w-1 rounded-full ${
                  deadline.color === "red"
                    ? "bg-red-500"
                    : deadline.color === "amber"
                    ? "bg-amber-500"
                    : "bg-blue-500"
                }`}
              />
  
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-800">
                  {deadline.title}
                </h3>
  
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-slate-500">
                    {deadline.date}
                  </span>
  
                  <span className="text-slate-300">•</span>
  
                  <span className="text-xs text-slate-500">
                    {deadline.time}
                  </span>
                </div>
              </div>
  
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  deadline.color === "red"
                    ? "bg-red-50 text-red-600"
                    : deadline.color === "amber"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {deadline.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }