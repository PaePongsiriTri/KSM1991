type Props = {
  eyebrow: string;
  titleTh: string;
  subtitleTh?: string;
};

export function PageHeader({ eyebrow, titleTh, subtitleTh }: Props) {
  return (
    <section className="relative bg-brand-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-brand-500/30 blur-3xl pointer-events-none" />
      <div className="container-x relative pt-40 pb-20 md:pt-48 md:pb-24">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          {titleTh}
        </h1>
        {subtitleTh && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            {subtitleTh}
          </p>
        )}
      </div>
    </section>
  );
}
