export type Stock = "in" | "low" | "out";

export interface Product {
  id: string;
  fa: string;
  en: string;
  cat: string;
  catFa: string;
  price: number;
  oldPrice?: number;
  stock: Stock;
  count?: number;
  cc: string;
  power: string;
  weight: string;
  fuel: string;
  tags: string[];
  usages: string[];
  level: string[];
  budget: "low" | "mid" | "high";
  rating: number;
  sold: number;
  featured?: boolean;
  badge?: string;
  desc: string;
  specs: { k: string; v: string }[];
  images: string[];
}

export const CATS = [
  { id: "all", fa: "همه", en: "ALL" },
  { id: "street", fa: "خیابانی", en: "STREET" },
  { id: "sport", fa: "اسپرت", en: "SPORT" },
  { id: "scooter", fa: "اسکوتر", en: "SCOOTER" },
  { id: "adventure", fa: "آفرود / ادونچر", en: "ADVENTURE" },
  { id: "parts", fa: "قطعات", en: "PARTS" },
  { id: "tools", fa: "ابزار", en: "TOOLS" },
  { id: "gear", fa: "کلاه و پوشاک", en: "GEAR" },
];

const img = (u: string) => u;

export const PRODUCTS: Product[] = [
  {
    id: "br250r",
    fa: "باقری BR250R اسپرت",
    en: "BAGHERI BR250R",
    cat: "sport",
    catFa: "اسپرت",
    price: 298000000,
    oldPrice: 315000000,
    stock: "in",
    count: 6,
    cc: "249cc",
    power: "28 اسب",
    weight: "168kg",
    fuel: "2.9L/100",
    tags: ["پرفروش", "پیست"],
    usages: ["race", "style"],
    level: ["mid", "pro"],
    budget: "high",
    rating: 4.8,
    sold: 132,
    featured: true,
    badge: "انتخاب پیست",
    desc: "فول‌فیرینگ اسپرت نمایندگی با شاسی دوقلو، ترمز ABS دوکاناله و اگزوز مسابقه‌ای. برای کسی که می‌خواد از پشت چراغ قرمز تا پیست آزادی حرف اول رو بزنه.",
    specs: [
      { k: "حجم موتور", v: "249 سی‌سی تک‌سیلندر آب‌خنک" },
      { k: "قدرت", v: "28 اسب‌بخار در 9500 دور" },
      { k: "گیربکس", v: "6 سرعته + کلاچ لغزشی" },
      { k: "ترمز", v: "ABS دوکاناله بوش" },
      { k: "وزن خشک", v: "168 کیلوگرم" },
      { k: "باک", v: "13 لیتر" },
      { k: "گارانتی", v: "18 ماه نمایندگی باقری" },
    ],
    images: [
      img("/images/pexels-34421457.jpg"),
      img("/images/pexels-33203538.jpg"),
      img("/images/pexels-33203537.jpg"),
      img("/images/pexels-32678623.jpg"),
    ],
  },
  {
    id: "apache200",
    fa: "تی‌وی‌اس آپاچی RTR 200",
    en: "APACHE RTR 200",
    cat: "street",
    catFa: "خیابانی",
    price: 168500000,
    stock: "low",
    count: 2,
    cc: "197cc",
    power: "20.5 اسب",
    weight: "152kg",
    fuel: "3.1L/100",
    tags: ["شهری", "کم‌مصرف"],
    usages: ["city", "work"],
    level: ["new", "mid"],
    budget: "mid",
    rating: 4.7,
    sold: 284,
    featured: true,
    badge: "پرفروش شهر",
    desc: "سلطان خیابان‌های تهران؛ چابک، کم‌استهلاک و خوش‌قیمت. انتخاب اول پیک‌ها و روزمره‌سوارها با خدمات پس از فروش کامل باقری.",
    specs: [
      { k: "حجم موتور", v: "197 سی‌سی روغن‌خنک" },
      { k: "قدرت", v: "20.5 اسب‌بخار" },
      { k: "گیربکس", v: "5 سرعته" },
      { k: "ترمز", v: "دیسکی + ABS تک‌کانال" },
      { k: "وزن", v: "152 کیلوگرم" },
      { k: "باک", v: "12 لیتر" },
      { k: "گارانتی", v: "12 ماه + 5 سرویس رایگان" },
    ],
    images: [
      img("/images/pexels-12125503.jpg"),
      img("/images/pexels-30629772.jpg"),
      img("/images/pexels-33153044.jpg"),
      img("/images/pexels-13278665.jpg"),
    ],
  },
  {
    id: "nmax155",
    fa: "یاماها NMAX 155 اسکوتر",
    en: "YAMAHA NMAX 155",
    cat: "scooter",
    catFa: "اسکوتر",
    price: 245000000,
    stock: "in",
    count: 9,
    cc: "155cc",
    power: "15 اسب",
    weight: "131kg",
    fuel: "2.4L/100",
    tags: ["اتومات", "شهری"],
    usages: ["city", "style"],
    level: ["new", "mid"],
    budget: "high",
    rating: 4.9,
    sold: 196,
    featured: true,
    desc: "اسکوتر اتومات شهری با استارت بدون استرس، فضای زین بزرگ و سواری نرم. برای رفت‌وآمد روزانه بدون دنده و کلاچ.",
    specs: [
      { k: "حجم موتور", v: "155 سی‌سی آب‌خنک VVA" },
      { k: "گیربکس", v: "CVT اتومات" },
      { k: "ترمز", v: "ABS دوکانال" },
      { k: "وزن", v: "131 کیلوگرم" },
      { k: "باک", v: "7.1 لیتر" },
      { k: "آپشن", v: "استارت خاموش/روشن + پورت USB" },
    ],
    images: [
      img("/images/pexels-10207634.jpg"),
      img("/images/pexels-4941535.jpg"),
      img("/images/pexels-12164173.jpg"),
      img("/images/pexels-29539365.jpg"),
    ],
  },
  {
    id: "crf250",
    fa: "هوندا CRF250L آفرود",
    en: "HONDA CRF250L",
    cat: "adventure",
    catFa: "آفرود / ادونچر",
    price: 485000000,
    stock: "low",
    count: 1,
    cc: "249cc",
    power: "24 اسب",
    weight: "143kg",
    fuel: "3.3L/100",
    tags: ["تک‌موجود", "آفرود"],
    usages: ["offroad", "trip"],
    level: ["mid", "pro"],
    budget: "high",
    rating: 5.0,
    sold: 41,
    featured: true,
    badge: "فقط ۱ دستگاه",
    desc: "دو‌منظوره واقعی؛ هم پلاک شهری هم روح جنگل. تعلیق بلند، لاستیک آج‌دار و شاسی ضدضربه برای جاده خاکی و سفر.",
    specs: [
      { k: "حجم موتور", v: "249 سی‌سی آب‌خنک" },
      { k: "تعلیق جلو", v: "43mm تلسکوپی 250mm" },
      { k: "ارتفاع زین", v: "875 میلی‌متر" },
      { k: "وزن", v: "143 کیلوگرم" },
      { k: "باک", v: "7.8 لیتر" },
      { k: "لاستیک", v: "آج‌دار 21/18" },
    ],
    images: [
      img("/images/pexels-32808516.jpg"),
      img("/images/pexels-7763698.jpg"),
      img("/images/pexels-18004077.jpg"),
      img("/images/pexels-9323648.jpg"),
    ],
  },
  {
    id: "click160",
    fa: "هوندا کلیک 160",
    en: "HONDA CLICK 160",
    cat: "scooter",
    catFa: "اسکوتر",
    price: 189000000,
    oldPrice: 198000000,
    stock: "in",
    count: 12,
    cc: "156cc",
    power: "15.4 اسب",
    weight: "116kg",
    fuel: "2.2L/100",
    tags: ["تخفیف", "اتومات"],
    usages: ["city", "work"],
    level: ["new"],
    budget: "mid",
    rating: 4.6,
    sold: 342,
    featured: true,
    desc: "اقتصادی‌ترین اتومات هوندا؛ سبک، کم‌مصرف و ایده‌آل شروع موتورسواری، مخصوص بانوان و دانشجوها.",
    specs: [
      { k: "حجم موتور", v: "156 سی‌سی eSP+" },
      { k: "گیربکس", v: "CVT" },
      { k: "وزن", v: "116 کیلوگرم" },
      { k: "باک", v: "5.5 لیتر" },
      { k: "ترمز", v: "CBS ترکیبی" },
    ],
    images: [
      img("/images/pexels-12152929.jpg"),
      img("/images/pexels-8589540.jpg"),
      img("/images/pexels-4941535.jpg"),
      img("/images/pexels-10207634.jpg"),
    ],
  },
  {
    id: "mt15",
    fa: "یاماها MT-15 نیکد",
    en: "YAMAHA MT-15",
    cat: "street",
    catFa: "خیابانی",
    price: 265000000,
    stock: "out",
    cc: "155cc",
    power: "18.4 اسب",
    weight: "139kg",
    fuel: "2.6L/100",
    tags: ["ناموجود", "نیکد"],
    usages: ["city", "style", "race"],
    level: ["mid", "pro"],
    budget: "high",
    rating: 4.8,
    sold: 88,
    desc: "هیولای خیابانی یاماها با چراغ دوقلوی تهاجمی و فریم دلتاباکس. فعلاً ناموجود — پیش‌ثبت‌نام سری بعدی بازه.",
    specs: [
      { k: "حجم موتور", v: "155 سی‌سی VVA" },
      { k: "قدرت", v: "18.4 اسب" },
      { k: "گیربکس", v: "6 سرعته" },
      { k: "ترمز", v: "ABS تک‌کانال" },
      { k: "وزن", v: "139 کیلوگرم" },
    ],
    images: [
      img("/images/pexels-13278665.jpg"),
      img("/images/pexels-30629772.jpg"),
      img("/images/pexels-33153044.jpg"),
      img("/images/pexels-12125503.jpg"),
    ],
  },
  {
    id: "kavir150",
    fa: "کویر S4 150 شهری",
    en: "KAVIR S4 150",
    cat: "street",
    catFa: "خیابانی",
    price: 68500000,
    stock: "in",
    count: 20,
    cc: "149cc",
    power: "12 اسب",
    weight: "128kg",
    fuel: "2.1L/100",
    tags: ["اقتصادی", "کار"],
    usages: ["work", "city"],
    level: ["new"],
    budget: "low",
    rating: 4.3,
    sold: 512,
    desc: "کارگر بی‌ادعای نمایندگی؛ ارزان، پرقطعه و کم‌خرج. بهترین گزینه شروع با بودجه محدود و کار روزمره سنگین.",
    specs: [
      { k: "حجم موتور", v: "149 سی‌سی هوا‌خنک" },
      { k: "گیربکس", v: "5 سرعته" },
      { k: "وزن", v: "128 کیلوگرم" },
      { k: "باک", v: "13 لیتر" },
      { k: "گارانتی", v: "12 ماه" },
    ],
    images: [
      img("/images/pexels-15693823.jpg"),
      img("/images/pexels-10920674.jpg"),
      img("/images/pexels-32048320.jpg"),
      img("/images/pexels-5803274.jpg"),
    ],
  },
  {
    id: "adv150",
    fa: "هوندا ADV 150 ادونچر شهری",
    en: "HONDA ADV 150",
    cat: "adventure",
    catFa: "آفرود / ادونچر",
    price: 228000000,
    stock: "in",
    count: 5,
    cc: "149cc",
    power: "14.5 اسب",
    weight: "133kg",
    fuel: "2.5L/100",
    tags: ["ادونچر", "اتومات"],
    usages: ["trip", "city", "offroad"],
    level: ["new", "mid"],
    budget: "high",
    rating: 4.7,
    sold: 97,
    featured: true,
    desc: "اسکوتر ادونچر؛ سواری ایستاده، شیشه بلند و تعلیق تقویت‌شده برای سفرهای بین‌شهری سبک و جاده خاکی.",
    specs: [
      { k: "حجم موتور", v: "149 سی‌سی eSP" },
      { k: "گیربکس", v: "CVT" },
      { k: "فاصله زمین", v: "165mm" },
      { k: "وزن", v: "133 کیلوگرم" },
      { k: "باک", v: "8 لیتر" },
    ],
    images: [
      img("/images/pexels-39535315.jpg"),
      img("/images/pexels-39535298.jpg"),
      img("/images/pexels-15693823.jpg"),
      img("/images/pexels-10920674.jpg"),
    ],
  },
  {
    id: "helmet-carbon",
    fa: "کلاه کاسکت کربن AGV مسابقه‌ای",
    en: "CARBON HELMET",
    cat: "gear",
    catFa: "کلاه و پوشاک",
    price: 12500000,
    oldPrice: 14800000,
    stock: "in",
    count: 15,
    cc: "—",
    power: "980g",
    weight: "980g",
    fuel: "—",
    tags: ["کربن", "ایمنی"],
    usages: ["race", "city", "trip"],
    level: ["mid", "pro"],
    budget: "mid",
    rating: 4.9,
    sold: 210,
    desc: "کلاه تمام‌کربن با استاندارد ECE 22.06، طلق آنتی‌فاگ و وزن زیر یک کیلو. جان شما ارزشش را دارد.",
    specs: [
      { k: "جنس", v: "فیبر کربن T300" },
      { k: "استاندارد", v: "ECE 22.06 + DOT" },
      { k: "وزن", v: "980 گرم" },
      { k: "سایز", v: "M / L / XL" },
    ],
    images: [
      img("/images/pexels-12993739.jpg"),
      img("/images/pexels-19486774.jpg"),
      img("/images/pexels-6291477.jpg"),
      img("/images/pexels-36813309.jpg"),
    ],
  },
  {
    id: "glove-pro",
    fa: "دستکش چرم مسابقه‌ای پرو",
    en: "PRO LEATHER GLOVES",
    cat: "gear",
    catFa: "کلاه و پوشاک",
    price: 2850000,
    stock: "in",
    count: 30,
    cc: "—",
    power: "چرم",
    weight: "—",
    fuel: "—",
    tags: ["چرم", "تابستانه"],
    usages: ["race", "city"],
    level: ["new", "mid", "pro"],
    budget: "low",
    rating: 4.5,
    sold: 430,
    desc: "دستکش چرم طبیعی با محافظ کربنی بند انگشت و کف ضدلغزش. لمس موبایل هم دارد.",
    specs: [
      { k: "جنس", v: "چرم بزی + توری" },
      { k: "محافظ", v: "TPU کربنی" },
      { k: "قابلیت", v: "تاچ موبایل" },
    ],
    images: [
      img("/images/pexels-12993737.jpg"),
      img("/images/pexels-5803460.jpg"),
      img("/images/pexels-19486774.jpg"),
      img("/images/pexels-12993739.jpg"),
    ],
  },
  {
    id: "toolkit-pro",
    fa: "ست ابزار 108 پارچه تعمیرگاهی",
    en: "108PC TOOLKIT",
    cat: "tools",
    catFa: "ابزار",
    price: 8900000,
    stock: "low",
    count: 3,
    cc: "—",
    power: "108pc",
    weight: "9kg",
    fuel: "—",
    tags: ["حرفه‌ای", "جعبه فلزی"],
    usages: ["work"],
    level: ["mid", "pro"],
    budget: "mid",
    rating: 4.6,
    sold: 118,
    desc: "جعبه ابزار فولادی کروم-وانادیوم؛ آچار بکس، جغجغه، آلن و سری تورکس. برای خونه و تعمیرگاه.",
    specs: [
      { k: "تعداد", v: "108 پارچه" },
      { k: "جنس", v: "کروم وانادیوم" },
      { k: "جعبه", v: "فلزی سه‌طبقه" },
      { k: "گارانتی", v: "مادام‌العمر تعویض" },
    ],
    images: [
      img("/images/pexels-9606734.jpg"),
      img("/images/pexels-8550664.jpg"),
      img("/images/pexels-31139705.jpg"),
      img("/images/pexels-11890963.jpg"),
    ],
  },
  {
    id: "brake-kit",
    fa: "لنت ترمز سرامیکی + دیسک",
    en: "CERAMIC BRAKE KIT",
    cat: "parts",
    catFa: "قطعات",
    price: 3400000,
    stock: "in",
    count: 25,
    cc: "—",
    power: "سرامیک",
    weight: "—",
    fuel: "—",
    tags: ["مصرفی", "ارتقا"],
    usages: ["city", "race", "trip"],
    level: ["new", "mid", "pro"],
    budget: "low",
    rating: 4.4,
    sold: 620,
    desc: "کیت ارتقای ترمز؛ لنت سرامیکی کم‌غبار + دیسک خنک‌شونده. خط ترمزت را ۲۰٪ کوتاه کن.",
    specs: [
      { k: "جنس لنت", v: "سرامیک کم‌غبار" },
      { k: "دیسک", v: "خنک‌شونده سوراخ‌دار" },
      { k: "سازگار", v: "آپاچی / هوندا / یاماها" },
    ],
    images: [
      img("/images/pexels-11890956.jpg"),
      img("/images/pexels-40046211.jpg"),
      img("/images/pexels-31139705.jpg"),
      img("/images/pexels-8550664.jpg"),
    ],
  },
  {
    id: "cross250",
    fa: "کراس 250 تریل مسابقه‌ای",
    en: "TRAIL CROSS 250",
    cat: "adventure",
    catFa: "آفرود / ادونچر",
    price: 142000000,
    stock: "out",
    cc: "249cc",
    power: "26 اسب",
    weight: "118kg",
    fuel: "—",
    tags: ["پیست خاکی", "ناموجود"],
    usages: ["offroad", "race"],
    level: ["pro"],
    budget: "mid",
    rating: 4.7,
    sold: 53,
    desc: "کراس خالص پیست خاکی؛ بدون پلاک، با هندلینگ وحشی. سری بعدی بهار می‌رسد.",
    specs: [
      { k: "حجم موتور", v: "249 سی‌سی" },
      { k: "وزن", v: "118 کیلوگرم" },
      { k: "استارت", v: "هندلی + برقی" },
      { k: "کاربرد", v: "پیست خاکی (بدون پلاک)" },
    ],
    images: [
      img("/images/pexels-33111740.jpg"),
      img("/images/pexels-32440269.jpg"),
      img("/images/pexels-32808516.jpg"),
      img("/images/pexels-7763698.jpg"),
    ],
  },
  {
    id: "vespa-classic",
    fa: "وسپا کلاسیک شهری LX",
    en: "VESPA LX CLASSIC",
    cat: "scooter",
    catFa: "اسکوتر",
    price: 198000000,
    stock: "low",
    count: 2,
    cc: "150cc",
    power: "12 اسب",
    weight: "128kg",
    fuel: "2.8L/100",
    tags: ["کلاسیک", "استایل"],
    usages: ["city", "style"],
    level: ["new", "mid"],
    budget: "mid",
    rating: 4.8,
    sold: 74,
    featured: true,
    desc: "استایل ایتالیایی خالص؛ بدنه فلزی، صدای خاص و نگاهی که همه برمی‌گردند. برای خاص‌پسندها.",
    specs: [
      { k: "حجم موتور", v: "150 سی‌سی" },
      { k: "بدنه", v: "فلزی یکپارچه" },
      { k: "وزن", v: "128 کیلوگرم" },
      { k: "ترمز", v: "دیسک جلو ABS" },
    ],
    images: [
      img("/images/pexels-29539365.jpg"),
      img("/images/pexels-12152929.jpg"),
      img("/images/pexels-8589540.jpg"),
      img("/images/pexels-10207634.jpg"),
    ],
  },
];

export const faNum = (n: number | string) =>
  Number(n).toLocaleString("fa-IR");

export const priceFa = (n: number) =>
  `${faNum(n)} تومان`;

export const STOCK_META: Record<Stock, { fa: string; en: string; dot: string; bar: string; text: string }> = {
  in: { fa: "موجود", en: "IN STOCK", dot: "bg-emerald-400", bar: "bg-emerald-400", text: "text-emerald-300" },
  low: { fa: "تعداد محدود", en: "LOW", dot: "bg-amber-400", bar: "bg-amber-400", text: "text-amber-300" },
  out: { fa: "ناموجود", en: "OUT", dot: "bg-red-500", bar: "bg-blood-500", text: "text-red-300" },
};

/* ---------- BLOG ---------- */
export interface Post {
  slug: string;
  title: string;
  ex: string;
  cat: string;
  read: string;
  date: string;
  img: string;
  body: string[];
  points: string[];
}

export const POSTS: Post[] = [
  {
    slug: "first-bike-guide",
    title: "راهنمای خرید اولین موتور: از بودجه تا قد و وزن",
    ex: "اگر اولین موتورت را می‌خری، این ۷ اشتباه رایج را نکن. از انتخاب حجم مناسب تا تست سواری واقعی در نمایندگی.",
    cat: "راهنمای خرید",
    read: "۸ دقیقه",
    date: "۲ آبان ۱۴۰۵",
    img: "/images/pexels-30629772.jpg",
    body: [
      "خرید اولین موتورسیکلت بیشتر از آن‌که یک خرید فنی باشد، یک تصمیم حسی است — و همین‌جا خیلی‌ها اشتباه می‌کنند. عاشق ظاهر یک اسپرت ۲۵۰ می‌شوند در حالی که قدشان به زمین نمی‌رسد یا مسیر روزانه‌شان ترافیک سنگین اتوبان است.",
      "قاعده اول نمایندگی باقری ساده است: موتور باید به زندگی تو بخورد، نه برعکس. اگر روزی ۴۰ کیلومتر در شهر می‌روی، یک نیکد ۱۵۰ یا اسکوتر اتومات از یک اسپرت فول‌فیرینگ برایت سریع‌تر است، چون خستگی کمتر یعنی تمرکز بیشتر.",
      "بودجه را فقط قیمت موتور نبین. کلاه استاندارد، بیمه، سرویس دوره‌ای و لاستیک را هم جمع بزن؛ حدود ۱۲ تا ۱۸ درصد روی قیمت موتور. ما در مشاوره حضوری همین جدول را با هم پر می‌کنیم تا غافلگیر نشوی.",
    ],
    points: [
      "قدم زیر ۱۷۰؟ سراغ زین زیر ۷۹۰ میلی‌متر برو و حتماً روی موتور بنشین",
      "تازه‌کار؟ حجم ۱۲۵ تا ۱۶۰؛ قدرت را بعداً اضافه کن، مهارت را اول",
      "ترافیک روزانه؟ اسکوتر اتومات یا نیکد سبک، نه کراس بلند",
      "حتماً تست سواری بگیر — ۱۰ دقیقه سواری از ۱۰ ساعت ویدیو ارزشمندتر است",
    ],
  },
  {
    slug: "scooter-vs-street",
    title: "اسکوتر اتومات یا دنده‌ای؟ جواب صادقانه بعد از ۲۰۰ مشاوره",
    ex: "مقایسه بی‌طرفانه هزینه، استهلاک، لذت سواری و بازار دست‌دوم — با جدول واقعی نمایندگی.",
    cat: "مقایسه",
    read: "۶ دقیقه",
    date: "۲۸ مهر ۱۴۰۵",
    img: "/images/pexels-10207634.jpg",
    body: ["خلاصه‌اش: اگر هدفت رسیدن راحت است اسکوتر ببر، اگر هدفت عاشق شدن است دنده‌ای."],
    points: ["اسکوتر: مصرف کمتر، سواری راحت", "دنده‌ای: هیجان و کنترل بیشتر"],
  },
  {
    slug: "winter-care",
    title: "خواب زمستانی موتور: ۹ کاری که قبل از سرما باید بکنی",
    ex: "بنزین، باتری، لاستیک و زنجیر — چک‌لیست تعمیرگاه باقری برای اینکه بهار موتور روشن شود.",
    cat: "نگهداری",
    read: "۵ دقیقه",
    date: "۲۰ مهر ۱۴۰۵",
    img: "/images/pexels-8550664.jpg",
    body: ["زمستان دشمن باتری و بنزین مانده است."],
    points: ["باک را پر کن + استابلایزر", "باتری را جدا و شارژ نگه دار"],
  },
  {
    slug: "helmet-guide",
    title: "کلاه ۳ میلیونی با ۱۲ میلیونی چه فرقی دارد؟",
    ex: "استاندارد ECE، وزن، طلق و فوم داخلی را کالبدشکافی کردیم تا پولت را درست خرج کنی.",
    cat: "ایمنی",
    read: "۷ دقیقه",
    date: "۱۲ مهر ۱۴۰۵",
    img: "/images/pexels-12993739.jpg",
    body: ["کلاه جایی نیست که پس‌انداز کنی."],
    points: ["ECE 22.06 حداقل قابل قبول", "وزن زیر ۱۴۰۰ گرم برای گردن"],
  },
  {
    slug: "offroad-start",
    title: "شروع آفرود با بودجه متوسط: از ADV شهری تا تریل",
    ex: "می‌خواهی خاکی بروی ولی نمی‌دانی از کجا؟ مسیر پله‌ای ما از اسکوتر ادونچر تا کراس پیست.",
    cat: "آفرود",
    read: "۹ دقیقه",
    date: "۵ مهر ۱۴۰۵",
    img: "/images/pexels-32808516.jpg",
    body: ["آفرود را با موتور اشتباه شروع نکن."],
    points: ["قدم اول: ADV شهری پلاک‌دار", "قدم دوم: کلاس آموزشی آفرود باقری"],
  },
  {
    slug: "installment-myth",
    title: "خرید قسطی موتور؛ دام یا فرصت؟",
    ex: "فرمول محاسبه پیش‌پرداخت و قسط منصفانه + ۴ سؤالی که قبل از امضا باید بپرسی.",
    cat: "خرید اقساطی",
    read: "۶ دقیقه",
    date: "۲۸ شهریور ۱۴۰۵",
    img: "/images/pexels-5803274.jpg",
    body: ["قسط بد وجود ندارد، قسط نفهمیده وجود دارد."],
    points: ["سود موثر را بپرس، نه فقط مبلغ قسط", "بیمه بدنه قسطی را حساب کن"],
  },
];

/* ---------- Assistant mock logic ---------- */
export interface Answers {
  budget: string;
  usage: string;
  level: string;
  style: string;
}

export function recommend(a: Answers): Product[] {
  const score = (p: Product) => {
    let s = 0;
    if (a.budget === "low" && p.budget === "low") s += 3;
    if (a.budget === "mid" && p.budget === "mid") s += 3;
    if (a.budget === "high" && p.budget === "high") s += 3;
    if (a.budget === "any") s += 1;
    if (p.usages.includes(a.usage)) s += 4;
    if (p.level.includes(a.level)) s += 2;
    if (a.style === "auto" && p.cat === "scooter") s += 3;
    if (a.style === "manual" && (p.cat === "street" || p.cat === "sport")) s += 3;
    if (a.style === "both" || a.style === "nosure") s += 1;
    if (p.stock === "out") s -= 2;
    if (p.featured) s += 1;
    s += p.rating / 5;
    return s;
  };
  return [...PRODUCTS]
    .filter((p) => ["street", "sport", "scooter", "adventure"].includes(p.cat))
    .sort((x, y) => score(y) - score(x))
    .slice(0, 3);
}
