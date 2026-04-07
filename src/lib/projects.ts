export type Project = {
  slug: string;
  name: string;
  image: string;
  type: string;
  typeTh: string;
  province: string;
  provinceTh: string;
  location: string;
  locationTh: string;
  year: string;
  developer: string;
  scope: string[];
  descriptionTh: string;
  highlightsTh: string[];
};

export const projects: Project[] = [
  {
    slug: "kave-bangsaen",
    name: "KAVE BANGSAEN",
    image: "/images/project-kave-bangsaen.png",
    type: "Low-rise Condominium",
    typeTh: "คอนโดมิเนียม Low-rise",
    province: "Chonburi",
    provinceTh: "ชลบุรี",
    location: "Saen Suk, Mueang Chonburi",
    locationTh: "ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี",
    year: "2025",
    developer: "AssetWise",
    scope: [
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "โครงการคอนโดมิเนียม Low-rise ขนาดใหญ่ย่านบางแสน ประกอบด้วยอาคาร 8 หลัง สูง 4 ชั้น รวมกว่า 974 ยูนิต ตั้งอยู่ใกล้มหาวิทยาลัยบูรพา โดดเด่นด้วยสระว่ายน้ำและพื้นที่ส่วนกลางขนาดใหญ่ท่ามกลางสวนสีเขียว K.S.Manufactory (1991) รับผิดชอบงานติดตั้งประตู–หน้าต่างอลูมิเนียม ผนังกระจก และราวกันตกทั้งโครงการ",
    highlightsTh: [
      "8 อาคาร สูง 4 ชั้น รวมเกือบ 1,000 ยูนิต",
      "ติดกับมหาวิทยาลัยบูรพา ใกล้หาดบางแสน",
      "งานประตู–หน้าต่างอลูมิเนียมและระบบกระจกครบวงจร",
    ],
  },
  {
    slug: "monte-rangsit-campus",
    name: "MONTE RANGSIT CAMPUS",
    image: "/images/project-monte-rangsit.png",
    type: "Campus-style Condominium",
    typeTh: "คอนโดมิเนียมแคมปัส",
    province: "Pathum Thani",
    provinceTh: "ปทุมธานี",
    location: "Lak Hok, Mueang Pathum Thani",
    locationTh: "ตำบลหลักหก อำเภอเมืองปทุมธานี จังหวัดปทุมธานี",
    year: "2022",
    developer: "Capital G Development",
    scope: [
      "Aluminium Door & Window",
      "Stickwall System",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียมไลฟ์สไตล์แคมปัสติดมหาวิทยาลัยรังสิต สูง 8 ชั้น รวม 545 ยูนิต ออกแบบสำหรับนักศึกษาและบุคลากรที่ต้องการที่พักคุณภาพใกล้มหาวิทยาลัย ทีมงาน K.S.Manufactory (1991) ดูแลงานประตู–หน้าต่างอลูมิเนียม ระบบ Stickwall และราวกันตก ตั้งแต่เริ่มจนส่งมอบ",
    highlightsTh: [
      "สูง 8 ชั้น 545 ยูนิต",
      "ติดมหาวิทยาลัยรังสิต เดินทางสะดวก",
      "งานติดตั้งประตู–หน้าต่าง และ Stickwall System",
    ],
  },
  {
    slug: "the-origin-sukhumvit-e22",
    name: "THE ORIGIN Sukhumvit E22 Station",
    image: "/images/project-the-origin.png",
    type: "High-rise Condominium",
    typeTh: "คอนโดมิเนียม High-rise",
    province: "Samut Prakan",
    provinceTh: "สมุทรปราการ",
    location: "Pak Nam, Mueang Samut Prakan",
    locationTh: "ถนนสายลวด ตำบลปากน้ำ อำเภอเมืองสมุทรปราการ",
    year: "2024",
    developer: "Origin Property",
    scope: [
      "Unitized Curtain Wall",
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียมอาคารสูง 31 ชั้น รวม 998 ยูนิต ตั้งอยู่ห่างจากสถานี BTS สายลวด (E22) เพียง 222 เมตร ใช้ระบบ Unitized Curtain Wall เต็มอาคาร K.S.Manufactory (1991) ดูแลงานออกแบบ ผลิต และติดตั้งระบบกระจกอลูมิเนียมทั้งระบบ ส่งมอบงานได้ตรงตามมาตรฐานสากล",
    highlightsTh: [
      "อาคารสูง 31 ชั้น 998 ยูนิต",
      "ติด BTS สายลวด (E22)",
      "ระบบ Unitized Curtain Wall เต็มอาคาร",
    ],
  },
  {
    slug: "vay-amata",
    name: "VAY AMATA",
    image: "/images/project-vay-amata.png",
    type: "Low-rise Residential Condominium",
    typeTh: "คอนโดมิเนียม Low-rise",
    province: "Chonburi",
    provinceTh: "ชลบุรี",
    location: "Ban Kao, Phan Thong, Chonburi",
    locationTh: "ตำบลบ้านเก่า อำเภอพานทอง จังหวัดชลบุรี",
    year: "2024",
    developer: "Sansiri",
    scope: [
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียม Low-rise 2 อาคาร สูง 8 ชั้น รวม 552 ยูนิต ใกล้นิคมอุตสาหกรรมอมตะนคร พัฒนาโดย Sansiri มุ่งเน้นตอบโจทย์พนักงานและผู้บริหารในพื้นที่ งานติดตั้งประตู–หน้าต่างอลูมิเนียม และระบบผนังกระจกโดย K.S.Manufactory (1991)",
    highlightsTh: [
      "2 อาคาร 8 ชั้น 552 ยูนิต",
      "ใกล้นิคมอุตสาหกรรมอมตะนคร",
      "โครงการคุณภาพจาก Sansiri",
    ],
  },
  {
    slug: "so-kaset",
    name: "SO KASET",
    image: "/images/project-so-kaset.png",
    type: "High-rise Condominium",
    typeTh: "คอนโดมิเนียม High-rise",
    province: "Bangkok",
    provinceTh: "กรุงเทพมหานคร",
    location: "Sena Nikhom, Chatuchak",
    locationTh: "แขวงเสนานิคม เขตจตุจักร กรุงเทพมหานคร",
    year: "2025",
    developer: "Origin Property",
    scope: [
      "Unitized Curtain Wall",
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "โครงการคอนโดมิเนียม High-rise 23 ชั้น ติดสถานี BTS แยกเกษตร ใกล้มหาวิทยาลัยเกษตรศาสตร์ พัฒนาโดย Origin Property ภายใต้แบรนด์ SO Origin ทีม K.S.Manufactory (1991) ดูแลงานเปลือกอาคารกระจกอลูมิเนียมทั้งโครงการ",
    highlightsTh: [
      "อาคารสูง 23 ชั้น",
      "ติด BTS แยกเกษตร",
      "ใกล้มหาวิทยาลัยเกษตรศาสตร์",
    ],
  },
  {
    slug: "atmoz-sriracha",
    name: "ATMOZ SRIRACHA",
    image: "/images/project-atmoz-sriracha.png",
    type: "Low-rise Condominium",
    typeTh: "คอนโดมิเนียม Low-rise",
    province: "Chonburi",
    provinceTh: "ชลบุรี",
    location: "Thung Sukhla, Si Racha, Chonburi",
    locationTh: "ตำบลทุ่งสุขลา อำเภอศรีราชา จังหวัดชลบุรี",
    year: "2023",
    developer: "AssetWise",
    scope: [
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียม Low-rise 3 อาคาร สูง 8 ชั้น รวม 539 ยูนิต ตั้งอยู่ริมถนนสุขุมวิท ตรงข้ามมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา บนเนื้อที่เกือบ 4 ไร่ K.S.Manufactory (1991) รับงานติดตั้งเปลือกอาคารอลูมิเนียม–กระจกทั้งโครงการ",
    highlightsTh: [
      "3 อาคาร 8 ชั้น รวม 539 ยูนิต",
      "ตรงข้ามมหาวิทยาลัยเกษตรศาสตร์ ศรีราชา",
      "ทำเลริมถนนสุขุมวิท",
    ],
  },
  {
    slug: "mira-monte-huahin",
    name: "MIRA MONTE HUAHIN",
    image: "/images/project-mira-monte-huahin.png",
    type: "Residential Condominium",
    typeTh: "คอนโดมิเนียมตากอากาศ",
    province: "Prachuap Khiri Khan",
    provinceTh: "ประจวบคีรีขันธ์",
    location: "Hua Hin, Prachuap Khiri Khan",
    locationTh: "ตำบลหัวหิน อำเภอหัวหิน จังหวัดประจวบคีรีขันธ์",
    year: "2024",
    developer: "Huahin Supsiri Property",
    scope: [
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "โครงการคอนโดมิเนียมตากอากาศในหัวหิน สูง 8 ชั้น 115 ยูนิต ภายใต้แนวคิด Mira (ทะเล) + Monte (ขุนเขา) ที่นำเสน่ห์ของทะเลและขุนเขาไว้ในที่เดียว งานติดตั้งประตู–หน้าต่างอลูมิเนียมและผนังกระจกที่ต้องทนต่อสภาพอากาศชายทะเลโดย K.S.Manufactory (1991)",
    highlightsTh: [
      "8 ชั้น 115 ยูนิต",
      "คอนโดตากอากาศในหัวหิน",
      "ระบบทนความเค็มและสภาพอากาศชายทะเล",
    ],
  },
  {
    slug: "modiz-rhyme-ramkhamhaeng",
    name: "Modiz Rhyme Ramkhamhaeng",
    image: "/images/project-modiz-rhyme-ramkhamhaeng.png",
    type: "High-rise Condominium",
    typeTh: "คอนโดมิเนียม High-rise",
    province: "Bangkok",
    provinceTh: "กรุงเทพมหานคร",
    location: "Hua Mak, Bang Kapi",
    locationTh: "แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร",
    year: "2023",
    developer: "AssetWise",
    scope: [
      "Unitized Curtain Wall",
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียมอาคารสูง 30 ชั้น รวม 555 ยูนิต ตรงข้ามมหาวิทยาลัยรามคำแหง ใกล้สถานี MRT รามคำแหง พัฒนาโดย AssetWise ที่มาพร้อมสิ่งอำนวยความสะดวกครบครัน งาน K.S.Manufactory (1991) ครอบคลุมระบบเปลือกอาคารกระจกอลูมิเนียมทั้งโครงการ",
    highlightsTh: [
      "อาคารสูง 30 ชั้น 555 ยูนิต",
      "ใกล้ MRT รามคำแหง",
      "ตรงข้ามมหาวิทยาลัยรามคำแหง",
    ],
  },
  {
    slug: "soho-bangkok-ratchada",
    name: "SOHO Bangkok Ratchada",
    image: "/images/project-soho-bangkok-ratchada.png",
    type: "High-rise Loft Condominium",
    typeTh: "คอนโดมิเนียมแนว Loft",
    province: "Bangkok",
    provinceTh: "กรุงเทพมหานคร",
    location: "Huai Khwang, Bangkok",
    locationTh: "แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร",
    year: "2023",
    developer: "Origin Property",
    scope: [
      "Unitized Curtain Wall",
      "Aluminium Door & Window",
      "Glass Wall",
      "Railing",
    ],
    descriptionTh:
      "คอนโดมิเนียม High-rise สูง 24 ชั้น 341 ยูนิต ภายใต้คอนเซ็ปต์ Small Office & Home (SOHO) ใกล้ MRT ห้วยขวาง พัฒนาโดย Origin Property ทีม K.S.Manufactory (1991) ดูแลงานเปลือกอาคารกระจกอลูมิเนียมทั้งโครงการ",
    highlightsTh: [
      "อาคารสูง 24 ชั้น 341 ยูนิต",
      "ใกล้ MRT ห้วยขวาง",
      "แนวคิด Small Office & Home (Loft)",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
