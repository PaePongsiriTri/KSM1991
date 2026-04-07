import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white p-1.5">
              <Image src="/images/logo.png" alt="KSM logo" width={48} height={48} className="object-contain" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold text-white">K.S.MANUFACTORY</div>
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
            <li>
              <Link href="/services/door-window/" className="hover:text-accent transition-colors">
                Door & Window
              </Link>
            </li>
            <li>
              <Link href="/services/stickwall/" className="hover:text-accent transition-colors">
                Stickwall System
              </Link>
            </li>
            <li>
              <Link href="/services/unitized/" className="hover:text-accent transition-colors">
                Unitized System
              </Link>
            </li>
            <li>
              <Link href="/services/glass-wall/" className="hover:text-accent transition-colors">
                Glass Wall
              </Link>
            </li>
            <li>
              <Link href="/services/skylight-skywalk/" className="hover:text-accent transition-colors">
                Skylight & Skywalk
              </Link>
            </li>
            <li>
              <Link href="/services/railing/" className="hover:text-accent transition-colors">
                Railing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            บริษัท
          </h4>
          <ul className="space-y-2 text-sm text-brand-300">
            <li>
              <Link href="/projects/" className="hover:text-accent transition-colors">
                ผลงาน
              </Link>
            </li>
            <li>
              <Link href="/services/" className="hover:text-accent transition-colors">
                บริการ
              </Link>
            </li>
            <li>
              <Link href="/blogs/" className="hover:text-accent transition-colors">
                บทความ
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-accent transition-colors">
                ติดต่อเรา
              </Link>
            </li>
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
                href="https://maps.app.goo.gl/GvDz8iBS6DtpKYpS6"
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
