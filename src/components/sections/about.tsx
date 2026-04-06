export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
            About Us
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-950 leading-tight">
            งานคุณภาพ
            <br />
            <span className="text-brand-600">ที่สั่งสมมากว่า 30 ปี</span>
          </h2>
          <p className="mt-6 text-brand-700 leading-relaxed">
            <strong>K.S.Manufactory (1991) Limited</strong> ก่อตั้งขึ้นในปี พ.ศ. 2534
            ด้วยความมุ่งมั่นที่จะเป็นผู้เชี่ยวชาญด้านงานประตู, หน้าต่างอลูมิเนียม
            และระบบกระจกอาคารระดับมาตรฐานสากล
          </p>
          <p className="mt-4 text-brand-700 leading-relaxed">
            เราให้บริการครบวงจรตั้งแต่การออกแบบ, ผลิต, ติดตั้ง
            ไปจนถึงบริการหลังการขาย โดยทีมช่างผู้เชี่ยวชาญและวัสดุคุณภาพสูง
            ทำให้ผลงานของเราถูกไว้วางใจจากผู้พัฒนาอสังหาริมทรัพย์ชั้นนำของประเทศ
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { title: "ทีมช่างมืออาชีพ", desc: "ผ่านการฝึกอบรมและมีประสบการณ์ตรง" },
              { title: "วัสดุคุณภาพสูง", desc: "เลือกใช้วัสดุได้มาตรฐานสากล" },
              { title: "บริการครบวงจร", desc: "ตั้งแต่ออกแบบจนติดตั้งเสร็จสมบูรณ์" },
              { title: "รับประกันงาน", desc: "พร้อมบริการหลังการขาย" },
            ].map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="mt-1 h-6 w-6 flex-none rounded-full bg-accent/15 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a8884d"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-brand-900">{f.title}</div>
                  <div className="text-sm text-brand-600 mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 via-brand-200 to-brand-300 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><rect width=%2228%22 height=%2228%22 x=%221%22 y=%221%22 fill=%22none%22 stroke=%22%23334d72%22 stroke-width=%220.6%22 opacity=%220.4%22/><rect width=%2228%22 height=%2228%22 x=%2231%22 y=%221%22 fill=%22none%22 stroke=%22%23334d72%22 stroke-width=%220.6%22 opacity=%220.4%22/><rect width=%2228%22 height=%2228%22 x=%221%22 y=%2231%22 fill=%22none%22 stroke=%22%23334d72%22 stroke-width=%220.6%22 opacity=%220.4%22/><rect width=%2228%22 height=%2228%22 x=%2231%22 y=%2231%22 fill=%22none%22 stroke=%22%23334d72%22 stroke-width=%220.6%22 opacity=%220.4%22/></svg>')]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-5xl font-extrabold text-accent">1991</div>
              <div className="mt-2 text-sm tracking-wider uppercase">Established</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-white border border-brand-100 rounded-xl shadow-xl p-5 max-w-[200px]">
            <div className="text-3xl font-bold text-brand-900">100%</div>
            <div className="text-xs text-brand-600 mt-1">
              Customer satisfaction across delivered projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
