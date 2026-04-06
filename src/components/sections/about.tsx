import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-brand-900/15 ring-1 ring-brand-100">
            <Image
              src="/images/team-professional.png"
              alt="K.S.Manufactory professional team member on site"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-4 bg-brand-700 text-white rounded-xl shadow-2xl shadow-brand-900/30 px-5 py-4">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-extrabold text-brand-900">
              30+
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-wider text-accent">
                Years
              </div>
              <div className="text-sm font-bold">of Excellence</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
            About Us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-900 leading-tight">
            Professional
            <br />
            DOOR and WINDOW
            <br />
            <span className="text-brand-700">Aluminium</span>
          </h2>
          <p className="mt-6 text-brand-700 leading-relaxed">
            <strong>บริษัท เค.เอส.แมนนูแฟคทอรี่ (1991) จำกัด</strong>{" "}
            ได้ถูกจัดตั้งขึ้นเพื่อประกอบการ รับติดตั้งงาน
            ประตู–หน้าต่างอลูมิเนียม อย่างเป็นระบบ
            โดยมุ่งเน้นที่ตอบสนองความต้องการของลูกค้า ได้อย่างมืออาชีพ
            ด้วยประสบการณ์ในการทำงานกว่า 30 ปี เช่น งานคอนโดมิเนียมอาคารสูง
            งานบ้าน งานโรงพยาบาล งานอาคารสำนักงาน ฯลฯ
          </p>

          <div className="mt-10 space-y-4">
            {[
              {
                title: "ประสบการณ์กว่า 30 ปี",
                desc: "สั่งสมความเชี่ยวชาญในงานอลูมิเนียมและกระจกอาคาร",
              },
              {
                title: "ทีมงานมืออาชีพ",
                desc: "ผ่านการฝึกอบรมและมีประสบการณ์ตรงกับงานทุกประเภท",
              },
              {
                title: "บริการครบวงจร",
                desc: "ตั้งแต่ออกแบบ ผลิต ติดตั้ง จนถึงบริการหลังการขาย",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="mt-0.5 h-7 w-7 flex-none rounded-full bg-brand-700 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-900">{f.title}</div>
                  <div className="text-sm text-brand-600 mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
