import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-700">
      {/* Subtle pattern */}
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[520px] w-[520px] rounded-full bg-brand-900/40 blur-3xl" />
      </div>

      <div className="container-x relative z-10 py-32 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left text */}
        <div className="text-white fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Since 1991 · 30+ Years
          </div>

          <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">
            KSM1991
          </h1>
          <p className="mt-5 text-2xl md:text-3xl font-semibold tracking-wide text-white/95">
            DOOR AND WINDOW ALUMINIUM
          </p>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
            ด้วยประสบการณ์กว่า 30 ปี เราส่งมอบงานติดตั้งที่ได้มาตรฐาน
            แข็งแรง ทันสมัย และตอบโจทย์ทุกโครงการ
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-sm font-bold text-brand-900 shadow-lg shadow-black/20 hover:bg-accent-dark hover:text-brand-950 transition-all hover:translate-y-[-2px]"
            >
              บริการของเรา
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              ดูผลงาน →
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-8">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-accent">30+</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">ปีประสบการณ์</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-accent">100+</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">โครงการสำเร็จ</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-accent">6</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">บริการครบวงจร</div>
            </div>
          </div>
        </div>

        {/* Right hero image */}
        <div className="relative fade-up">
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <Image
              src="/images/hero-worker.avif"
              alt="K.S.Manufactory installation team at work"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-white text-brand-900 rounded-xl shadow-2xl shadow-black/30 px-5 py-4">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-extrabold text-brand-900 text-lg">
              30+
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-wider text-brand-500 font-semibold">
                Years
              </div>
              <div className="text-sm font-bold">of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
