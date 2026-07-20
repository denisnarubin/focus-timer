

function Stats() {
  // Фейковые данные для демонстрации структуры
  const stats = [
    { label: "Completed Tasks", value: "24", change: "+12% this week", isPositive: true },
    { label: "Focus Time", value: "14h 20m", change: "+2.5h this week", isPositive: true },
    { label: "Break Time", value: "3h 45m", change: "-15m this week", isPositive: true },
    { label: "Productivity Score", value: "88%", change: "-2% this week", isPositive: false },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-8 bg-slate-50 dark:bg-slate-900 min-h-screen">
      
      {/* Шапка страницы */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Analytics & Progress</h1>
          <p className="text-sm text-slate-500">Monitor your task completion and focus patterns.</p>
        </div>
        
        {/* Фильтр по периоду */}
        <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 rounded-xl shadow-sm self-start">
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Week</button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Month</button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Year</button>
        </div>
      </div>

      {/* Раздел 1: Сетка ключевых показателей (KPI Cards) */}
      <section aria-label="Key Metrics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between gap-2"
          >
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.label}</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.isPositive 
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' 
                  : 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
              }`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Раздел 2: Интерактивные графики / Аналитика активности */}
      <section aria-label="Activity Charts" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Основной график: Активность фокуса (Занимает 2 колонки) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Focus Hours</h3>
            <span className="text-xs text-slate-400">Total: 14.3 hours</span>
          </div>
          
          {/* Плейсхолдер для библиотеки графиков (Recharts / Chart.js) */}
          <div className="h-64 w-full bg-slate-50 dark:bg-slate-950 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-sm text-slate-400">
            [ Здесь будет график Recharts / AreaChart ]
          </div>
        </div>

        {/* Дополнительный блок: Распределение по категориям задач (1 колонка) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Task Categories</h3>
          
          {/* Плейсхолдер для Donut Chart */}
          <div className="h-40 w-full flex items-center justify-center text-sm text-slate-400">
            <div className="relative w-28 h-28 rounded-full border-[12px] border-slate-100 dark:border-slate-800 flex items-center justify-center">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">3 Topics</span>
              {/* Декоративное наложение сегментов */}
              <div className="absolute inset-0 rounded-full border-[12px] border-t-indigo-600 border-r-indigo-400 border-b-transparent border-l-transparent -m-[12px]"></div>
            </div>
          </div>

          {/* Легенда категорий */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                <span className="text-slate-600 dark:text-slate-400">Work & Coding</span>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">65%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                <span className="text-slate-600 dark:text-slate-400">Education (English)</span>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">25%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <span className="text-slate-600 dark:text-slate-400">Routine & Other</span>
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">10%</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Stats;