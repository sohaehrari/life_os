export default function StatCard({
    title,
    description,
    value,
    icon,
    trend,
    trendType = "positive",
  }) {
    return (
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
  
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {value}
            </h3>
          </div>
  
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            {icon}
          </div>
        </div>
  
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-slate-500">{description}</p>
  
          {trend && (
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${
                trendType === "positive"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {trend}
            </span>
          )}
        </div>
      </div>
    );
  }