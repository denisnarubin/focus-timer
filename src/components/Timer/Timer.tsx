
import BrainIcon from '../../assets/icons/brain.svg?react';
import TimerIcon from '../../assets/icons/timer.svg?react';

function Timer() {
  return (
    <>
      <section className="mx-10 mx-auto mt-20 flex h-55 w-55 flex-col items-center justify-center gap-5 rounded-full border-2 border-slate-700">
        <div className="flex flex-col items-center gap-2">
          <time className="text-3xl font-bold" dateTime="PT01H20M00S">
            01:20:00
          </time>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <BrainIcon className="h-10 w-10 fill-current stroke-current stroke-[2.5] text-slate-100" />
          </button>
          <button>
            <TimerIcon className="h-10 w-10 fill-current stroke-current stroke-[2.5] text-slate-100" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Timer;
