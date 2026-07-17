function TaskCard() {
  return (
    <section className="
      group relative flex items-center justify-between p-5 max-w-sm w-full mx-auto
      
      bg-gradient-to-b from-white/[0.12] to-white/[0.02]
      
      backdrop-blur-xl
      
      border border-white/[0.15] hover:border-purple-500/40
      
      rounded-2xl transition-all duration-300 cursor-pointer
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
      
      hover:-translate-y-0.5
      hover:shadow-[0_12px_40px_0_rgba(168,85,247,0.12)]
      
    ">
      <div className="flex items-center gap-4">
        <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-colors group-hover:border-purple-400">
          <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-purple-400 transition-all scale-0 group-hover:scale-100" />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white/90 tracking-wide">
            Сделать интерфейс со стеклом
          </span>
          <span className="text-[10px] bg-white/[0.06] border border-white/10 text-slate-300 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider w-fit">
            Design
          </span>
        </div>
      </div>

      <div className="text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}

export default TaskCard;