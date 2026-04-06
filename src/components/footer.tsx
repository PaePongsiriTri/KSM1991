import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-brand-950 font-bold text-lg">
              KS
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-white">K.S.Manufactory</div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent">
                (1991) Limited
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-brand-300 leading-relaxed">
            ผู้เชี่ยวชาญงานประตู–หน้าต่างอลูมิเนียม, curtain wall และระบบกระจกอาคาร
            ด้วยประสบการณ์มากกว่า 30 ปี ส่งมอบงานคุณภาพสำหรับคอนโดมิเนียม,
            ที่อยู่อาศัย, โรงพยาบาล และอาคารพาณิชย์
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            บริการ
          </h4>
          <ul className="space-y-2 text-sm text-brand-300">
            <li>Door & Window</li>
            <li>Stickwall System</li>
            <li>Unitized System</li>
            <li>Glass Wall</li>
            <li>Skylight & Skywalk</li>
            <li>Railing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            ติดต่อ
          </h4>
          <ul className="space-y-3 text-sm text-brand-300">
            <li>
              <span className="text-brand-400">Tel:</span> 038-241137, 038-241536
            </li>
            <li>
              <span className="text-brand-400">Email:</span> admin@ksm1991.co.th
            </li>
            <li className="leading-relaxed">
              153/1 หมู่ 1 ต.บางละมุง<br />
              อ.บางละมุง จ.ชลบุรี 20150
            </li>
            <li>
              <Link
                href="https://maps.app.goo.gl/qNqZK1BLRmW4v2meA"
                target="_blank"
                rel="noopener"
                className="text-accent hover:text-white transition-colors"
              >
                เปิดใน Google Maps →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800/60">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-400">
            © {new Date().getFullYear()} K.S.Manufactory (1991) Limited. All rights reserved.
          </p>
          <p className="text-xs text-brand-500">
            Crafted with precision since 1991.
          </p>
        </div>
      </div>
    </footer>
  );
}
