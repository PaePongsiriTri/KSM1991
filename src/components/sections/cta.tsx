import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-accent to-accent-dark text-brand-950">
      <div className="container-x grid lg:grid-cols-3 gap-10 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            พร้อมเริ่มโครงการของคุณ?
          </h2>
          <p className="mt-4 max-w-xl text-brand-950/80 text-lg">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับใบเสนอราคา
            หรือคำแนะนำการเลือกระบบที่เหมาะสมกับโครงการของคุณ
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            href="tel:038-241137"
            className="rounded-full bg-brand-950 text-white px-7 py-4 text-center text-sm font-semibold hover:bg-brand-800 transition-colors shadow-lg"
          >
            โทร 038-241137
          </Link>
          <Link
            href="/contact/"
            className="rounded-full border-2 border-brand-950 px-7 py-4 text-center text-sm font-semibold hover:bg-brand-950 hover:text-white transition-colors"
          >
            ติดต่อเรา →
          </Link>
        </div>
      </div>
    </section>
  );
}
