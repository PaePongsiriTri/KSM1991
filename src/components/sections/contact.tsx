"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-50/60">
      <div className="container-x grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-dark font-semibold">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand-950 leading-tight">
            ติดต่อเรา
          </h2>
          <p className="mt-5 text-brand-700">
            ยินดีให้คำปรึกษา และส่งใบเสนอราคาฟรี
            สำหรับทุกขนาดโครงการ
          </p>

          <div className="mt-10 space-y-6">
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                </svg>
              }
              label="Telephone"
              lines={["038-241137", "038-241536"]}
            />
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              label="Email"
              lines={["admin@ksm1991.co.th"]}
            />
            <ContactItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              label="Address"
              lines={[
                "153/1 หมู่ 1 ต.บางละมุง",
                "อ.บางละมุง จ.ชลบุรี 20150",
              ]}
            />
          </div>

          <a
            href="https://maps.app.goo.gl/qNqZK1BLRmW4v2meA"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-dark hover:text-brand-900"
          >
            เปิดใน Google Maps →
          </a>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white rounded-2xl border border-brand-100 p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-brand-950">
              ส่งข้อความถึงเรา
            </h3>
            <p className="mt-2 text-sm text-brand-600">
              กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="ชื่อ-นามสกุล" name="name" required />
              <Field label="เบอร์โทร" name="phone" type="tel" required />
              <Field label="อีเมล" name="email" type="email" className="sm:col-span-2" />
              <Field label="ชื่อโครงการ / บริษัท" name="company" className="sm:col-span-2" />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-brand-800">
                รายละเอียด <span className="text-accent-dark">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="โปรดระบุประเภทงาน, ขนาดโครงการ, หรือคำถามที่ต้องการสอบถาม"
                className="mt-2 w-full rounded-lg border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full sm:w-auto rounded-full bg-brand-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
            >
              {submitted ? "ขอบคุณ! เราจะติดต่อกลับโดยเร็ว ✓" : "ส่งข้อความ →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 flex-none rounded-full bg-brand-900 text-white flex items-center justify-center">
        <div className="h-5 w-5">{icon}</div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-brand-500 font-semibold">
          {label}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-brand-900 font-medium">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-brand-800">
        {label}
        {required && <span className="text-accent-dark"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-brand-200 bg-brand-50/40 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
