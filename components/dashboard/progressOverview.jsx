export default function ProgressOverview() {
    const progress = 68;
  
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Progress Overview
            </h2>
  
            <p className="mt-1 text-sm text-slate-500">
              Track your productivity and overall progress
            </p>
          </div>
  
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
            <svg
              className="h-6 w-6 text-indigo-600"
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
          </div>
        </div>
  
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Overall progress
            </p>
  
            <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
              {progress}%
            </p>
          </div>
  
          <span className="mb-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            +12.5%
          </span>
        </div>
  
        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
  
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    );
  }