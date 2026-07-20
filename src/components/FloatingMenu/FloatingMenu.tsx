import { NavLink } from 'react-router-dom';


function FloatingMenu() {

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClass = "flex-1 flex flex-col items-center justify-center py-2 px-3 rounded-full transition-all duration-200 outline-none";
    const activeClass = "bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-none";
    const inactiveClass = "text-slate-500 dark:text-slate-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40";
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  }
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4">
      {/* Сверхпрозрачная плашка с насыщенным размытием сзади */}
      <nav className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-200/20 dark:border-slate-800/20 rounded-full p-2 shadow-xl shadow-slate-200/30 dark:shadow-none flex items-center justify-between gap-1">
        
        {/* Кнопка 1: Таймер (Активное состояние) */}
        <NavLink to = "/"
          type="button"
          className={getNavLinkClass}
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Timer</span>
        </NavLink>

        {/* Кнопка 2: Добавить задачу */}
        <NavLink to = "/add-task"
          type="button"
          className={getNavLinkClass}
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Add Task</span>
        </NavLink>

        {/* Кнопка 3: Статистика */}
        <NavLink to = "/stats"
          type="button"
          className={getNavLinkClass}
        >
          <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-[10px] font-medium tracking-wide">Stats</span>
        </NavLink>

      </nav>
    </div>
  );
}

export default FloatingMenu;