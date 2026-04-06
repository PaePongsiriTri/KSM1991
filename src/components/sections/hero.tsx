import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-400/20 blur-3xl" />
      </div>

      <div className="container-x py-32 md:py-40 text-white">
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Since 1991 · 30+ Years of Excellence
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            ผู้เชี่ยวชาญงาน
            <br />
            <span className="text-accent">ประตู–หน้าต่าง</span>
            <br />
            อลูมิเนียม
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-brand-100/85 leading-relaxed">
            ด้วยประสบการณ์มากกว่า 30 ปี เราส่งมอบงานติดตั้งที่ได้มาตรฐาน
            ทนทาน และทันสมัย สำหรับทุกโครงการ ตั้งแต่คอนโดมิเนียม,
            ที่พักอาศัย, โรงพยาบาล และอาคารพาณิชย์
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-accent/20 hover:bg-accent-dark transition-all hover:translate-y-[-2px]"
            >
              ขอใบเสนอราคา
            </Link>
            <Link
              href="/#projects"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              ดูผลงานของเรา →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">30+</div>
              <div className="text-xs md:text-sm text-brand-200 mt-1">ปีประสบการณ์</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">100+</div>
              <div className="text-xs md:text-sm text-brand-200 mt-1">โครงการสำเร็จ</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">6</div>
              <div className="text-xs md:text-sm text-brand-200 mt-1">บริการครบวงจร</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}
