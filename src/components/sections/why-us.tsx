const reasons = [
  {
    num: "01",
    title: "ประสบการณ์ 30+ ปี",
    desc: "สั่งสมประสบการณ์และความเชี่ยวชาญในงานอลูมิเนียมและกระจกอาคารยาวนาน",
  },
  {
    num: "02",
    title: "มาตรฐานสากล",
    desc: "ใช้วัสดุและกระบวนการที่ได้รับการรับรองมาตรฐานระดับสากล",
  },
  {
    num: "03",
    title: "ทีมช่างมืออาชีพ",
    desc: "ทีมงานผ่านการฝึกอบรม มีใบรับรอง และประสบการณ์ตรง",
  },
  {
    num: "04",
    title: "บริการครบวงจร",
    desc: "ตั้งแต่ออกแบบ ผลิต ติดตั้ง จนถึงบริการหลังการขาย",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-950 leading-tight">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="mt-5 text-brand-700">
            เพราะเราเชื่อว่างานคุณภาพไม่ใช่แค่ผลลัพธ์ แต่คือกระบวนการทุกขั้นตอน
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="relative rounded-2xl border border-brand-100 bg-brand-50/40 p-8 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all"
            >
              <div className="text-4xl font-extrabold text-accent">{r.num}</div>
              <div className="mt-4 h-px w-10 bg-brand-300" />
              <h3 className="mt-4 text-lg font-bold text-brand-950">{r.title}</h3>
              <p className="mt-2 text-sm text-brand-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
