import imgLogo from "/assets/logo.webp";
import imgHero from "/assets/image 2.webp";
import imgStudio1 from "/assets/image 1.webp";
import imgStudio2 from "/assets/image 3.webp";
import imgWork1 from "/assets/image 9.webp";
import imgWork2 from "/assets/image 6.webp";
import imgWork3 from "/assets/image 4.webp";
import imgWork4 from "/assets/image 8.webp";
import imgVisit from "/assets/image 0.webp";
import imgPriceList1 from "/assets/Price List 1.webp";
import imgPriceList2 from "/assets/Price List 2.webp";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const BOOKING_URL =
  "https://www.fresha.com/a/nails-nest-auckland-107-oakdale-road-ix1wozzt/booking";

const testimonials = [
  {
    comment:
      "The attention to detail is incredible. My nails look better than I could have imagined. Highly recommend!",
    name: "Sarah Mitchell",
    location: "Auckland",
  },
  {
    comment:
      "Such a calm and welcoming space. The team made me feel so comfortable and the results are stunning.",
    name: "Jessica Chen",
    location: "Auckland",
  },
  {
    comment:
      "Best nail salon experience I've had. Professional, friendly, and the quality is exceptional.",
    name: "Emma Thompson",
    location: "Auckland",
  },
  {
    comment:
      "Coming back every time! The care and precision they put into their work is unmatched.",
    name: "Rachel Williams",
    location: "Auckland",
  },
];

const navLinks = [
  { href: "#studio", label: "STUDIO" },
  { href: "#work", label: "WORK" },
  { href: "#menu", label: "MENU" },
  { href: "#words", label: "WORDS" },
  { href: "#visit", label: "VISIT" },
];

const menuColumnLeft = [
  {
    title: "Gel Polish",
    items: [
      ["Gel X — Extensions", "$70"],
      ["Manicure", "$50"],
      ["Express Manicure", "$40"],
      ["Spa Pedicure", "$55"],
      ["Express Pedicure", "$45"],
      ["Builder Gel Extension", "$65"],
      ["Builder Gel On Natural Nail", "$60"],
      ["Rubber / hardener Base", "$5"],
      ["Combo Manicure & Pedicure", "$90"],
    ],
  },
  {
    title: "Normal Polish",
    items: [
      ["Manicure", "$30"],
      ["Spa Manicure", "$45"],
      ["Express Manicure", "$20"],
      ["Express Pedicure", "$25"],
      ["Combo Manicure & Pedicure", "$60"],
    ],
  },
  {
    title: "SNS / Dipping Powder",
    items: [
      ["SNS With Extensions", "$70"],
      ["SNS On Natural Nails", "$60"],
    ],
  },
];

const menuColumnRight = [
  {
    title: "Waxing & Tinting",
    items: [
      ["Eyebrow", "$15"],
      ["Upper Lip", "$10"],
      ["Chin", "$10"],
      ["Combo eyebrow, upper lip, chin", "$30"],
      ["Under arms", "$25"],
      ["Full arms", "$40"],
      ["Half arms", "$30"],
      ["Full legs", "$50"],
      ["Half legs", "$35"],
      ["Tinting eyebrow", "$15"],
      ["Tinting eyelash", "$20"],
      ["Combo brow tint & wax, eyelash tint", "$45"],
    ],
  },
  {
    title: "Special For Men",
    items: [
      ["Spa Pedicure without polish", "$40"],
      ["Spa Pedicure, extra massage (10 min)", "$50"],
    ],
  },
  {
    title: "Add-ons",
    items: [
      ["Take off on top of any service", "$5"],
      ["Take off dipping / acrylic", "$20"],
      ["Take off gel", "$15"],
      ["French", "$5"],
      ["Holographic, chrome & cat eye", "$10"],
      ["Gem stone", "from $1"],
      ["Nail art", "from $5"],
    ],
  },
];

function MenuColumn({ column }: { column: typeof menuColumnLeft }) {
  return (
    <div className="flex flex-col gap-9 sm:gap-11">
      {column.map((category) => (
        <div key={category.title}>
          <h3 className="font-['Della_Respira:Regular',sans-serif] text-[#31402f] text-[22px] sm:text-[26px] lg:text-[28px] font-normal pb-3.5 sm:pb-4 mb-4 sm:mb-[18px] border-b border-[#cdd2c8]">
            {category.title}
          </h3>
          <div className="flex flex-col gap-2.5 sm:gap-[11px] text-[#3f483d] text-[15px] sm:text-[17px]">
            {category.items.map(([name, price]) => (
              <div key={name} className="flex justify-between gap-4">
                <span>{name}</span>
                <span className="text-[#7e8e7f]">{price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ResponsiveHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showPrintedMenu, setShowPrintedMenu] = useState(false);

  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <div className="bg-[#f4f4f1] min-h-screen w-full font-['Lisu_Bosa:Regular',sans-serif]">
      {/* Header */}
      <header className="bg-[#31402f] sticky top-0 z-50 w-full">
        <div className="flex items-center justify-between h-[88px] px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              alt="Nails Nest"
              src={imgLogo}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
            />
            <div>
              <div className="font-['Della_Respira:Regular',sans-serif] text-[#f6f3e6] text-[13px] sm:text-[15px] lg:text-[17px] tracking-[.14em]">
                NAILS NEST
              </div>
              <div className="text-[#9fb098] text-[8px] sm:text-[9px] lg:text-[10px] tracking-[.2em]">
                HILLSBOROUGH
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-[34px] text-[#e9e5ca] text-[12px] font-semibold tracking-[.16em]">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-85 transition-opacity">
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e9e5ca] text-[#31402f] px-[22px] py-[11px] rounded-sm hover:bg-white transition-colors"
            >
              BOOK NOW
            </a>
          </nav>

          <button
            className="lg:hidden text-[#e9e5ca] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#31402f] border-t border-[#e9e5ca]/20">
            <nav className="flex flex-col px-5 py-5 gap-4 text-[#e9e5ca] text-[13px] font-semibold tracking-[.16em]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-85 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e9e5ca] text-[#31402f] px-[22px] py-3 rounded-sm text-center hover:bg-white transition-colors"
              >
                BOOK NOW
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative w-full h-[600px] sm:h-[680px] lg:h-[760px] overflow-hidden bg-[#31402f]">
        <img
          alt="Nails Nest studio"
          src={imgHero}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,38,28,.92)_0%,rgba(28,38,28,.78)_42%,rgba(28,38,28,.15)_100%)]" />
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center gap-5 sm:gap-7 lg:gap-[34px]">
          <div className="flex items-center gap-3.5 text-[#cfd8c4] text-[11px] sm:text-[12px] tracking-[.24em]">
            <div className="w-10 h-px bg-[#cfd8c4]" />
            HILLSBOROUGH · AUCKLAND
          </div>
          <h1 className="font-['Della_Respira:Regular',sans-serif] text-[#f6f3e6] text-[42px] sm:text-[64px] md:text-[80px] lg:text-[104px] leading-[0.98] font-normal max-w-[820px]">
            Where beauty
            <br />
            finds its nest
          </h1>
          <p className="text-[#dfe3d6] text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.7] max-w-[520px]">
            A cozy boutique nail studio built on gentle care, clean technique and quiet
            afternoons. Gel, SNS, nail art and pedicures — done properly, never rushed.
          </p>
          <div className="flex items-center gap-3.5 sm:gap-[18px] pt-1.5 flex-wrap">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e9e5ca] text-[#26331f] text-[14px] sm:text-[16px] tracking-[.14em] px-6 py-4 sm:px-[38px] sm:py-[19px] rounded-sm hover:bg-white transition-colors"
            >
              BOOK AN APPOINTMENT
            </a>
            <a
              href="tel:0274579888"
              className="text-[#e9e5ca] text-[14px] sm:text-[16px] tracking-[.14em] px-6 py-[14px] sm:px-[30px] sm:py-[18px] border border-[rgba(233,229,202,.5)] rounded-sm hover:border-[#e9e5ca] transition-colors"
            >
              CALL 027 457 9888
            </a>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 bg-[rgba(20,28,20,.62)] border-t border-[rgba(233,229,202,.2)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-[#e2e6d8] text-[10px] sm:text-[13px] tracking-[.14em]">
            <div>OPEN 7 DAYS</div>
            <div>107 OAKDALE ROAD, MOUNT ROSKILL</div>
            <div>GEL · SNS · NAIL ART · PEDICURE</div>
            <div className="text-right">FROM $30</div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="bg-[#f4f4f1] py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8 lg:px-12 scroll-mt-[100px] sm:scroll-mt-[116px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[88px] items-center">
          <div className="flex flex-col gap-5 sm:gap-[26px]">
            <div className="text-[#7e8e7f] text-[12px] tracking-[.24em]">THE STUDIO</div>
            <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#2f3d2f] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.14] font-normal">
              A small room in Hillsborough where nobody is rushed.
            </h2>
            <p className="text-[#4b5449] text-[16px] sm:text-[18px] leading-[1.85]">
              Nails Nest is a boutique studio dedicated to gentle care, clean techniques and
              beautifully crafted nails. Every client gets a calm, comfortable space to unwind
              — and results worth coming back for.
            </p>
            <p className="text-[#4b5449] text-[16px] sm:text-[18px] leading-[1.85]">
              We specialise in high-quality gel, natural-looking manicures, elegant nail art and
              relaxing pedicure treatments. From premium products to a personalised approach,
              every detail is designed to feel safe, refreshing and satisfying.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-5 pt-3.5 border-t border-[#d8dbd3]">
              <div>
                <div className="font-['Della_Respira:Regular',sans-serif] text-[26px] sm:text-[34px] text-[#31402f]">7</div>
                <div className="text-[#7b837a] text-[11px] sm:text-[13px] tracking-[.12em] pt-1">DAYS A WEEK</div>
              </div>
              <div>
                <div className="font-['Della_Respira:Regular',sans-serif] text-[26px] sm:text-[34px] text-[#31402f]">40+</div>
                <div className="text-[#7b837a] text-[11px] sm:text-[13px] tracking-[.12em] pt-1">SERVICES</div>
              </div>
              <div>
                <div className="font-['Della_Respira:Regular',sans-serif] text-[26px] sm:text-[34px] text-[#31402f]">5.0</div>
                <div className="text-[#7b837a] text-[11px] sm:text-[13px] tracking-[.12em] pt-1">CLIENT RATING</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            <div className="aspect-[3/4] overflow-hidden bg-[#dcded6]">
              <img alt="Studio interior" src={imgStudio1} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-[#dcded6]">
              <img alt="Pedicure chairs" src={imgStudio2} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="hidden lg:block relative h-[620px]">
            <div className="absolute top-0 right-0 w-[430px] h-[540px] overflow-hidden bg-[#dcded6]">
              <img alt="Studio interior" src={imgStudio1} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[330px] h-[330px] overflow-hidden border-[10px] border-[#f4f4f1] bg-[#dcded6]">
              <img alt="Pedicure chairs" src={imgStudio2} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-[#31402f] py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8 lg:px-12 scroll-mt-[100px] sm:scroll-mt-[116px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 mb-10 sm:mb-[52px] flex-wrap">
            <div>
              <div className="text-[#9fb098] text-[12px] tracking-[.24em] mb-4">RECENT WORK</div>
              <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#f6f3e6] text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-normal">
                Stop time.
                <br />
                Stay beautiful.
              </h2>
            </div>
            <a
              href="https://www.facebook.com/nailsnest.hillsborough"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e9e5ca] text-[13px] tracking-[.16em] border-b border-[rgba(233,229,202,.5)] pb-1.5"
            >
              SEE MORE ON FACEBOOK
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[300px] gap-3 sm:gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden bg-[#3e4f3b] group">
              <img
                alt="Nail art"
                src={imgWork1}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 overflow-hidden bg-[#3e4f3b] group">
              <img
                alt="French set"
                src={imgWork2}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden bg-[#3e4f3b] group">
              <img
                alt="Gel manicure"
                src={imgWork3}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden bg-[#3e4f3b] group">
              <img
                alt="Natural manicure"
                src={imgWork4}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-[#f4f4f1] py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8 lg:px-12 scroll-mt-[100px] sm:scroll-mt-[116px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14 flex-wrap">
            <div>
              <div className="text-[#7e8e7f] text-[12px] tracking-[.24em] mb-4">PRICE MENU</div>
              <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#2f3d2f] text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-normal">
                Everything we do
              </h2>
            </div>
            <button
              onClick={() => setShowPrintedMenu((v) => !v)}
              className="bg-transparent border border-[#9aa79a] text-[#41513f] text-[13px] tracking-[.14em] px-6 py-3.5 rounded-sm hover:bg-[#e3e6de] transition-colors"
            >
              {showPrintedMenu ? "VIEW AS LIST" : "VIEW PRINTED MENU"}
            </button>
          </div>

          {showPrintedMenu ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <img
                alt="Printed price list — nails"
                src={imgPriceList1}
                className="w-full h-auto rounded-[24px] block"
              />
              <img
                alt="Printed price list — waxing"
                src={imgPriceList2}
                className="w-full h-auto rounded-[24px] block"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-[72px]">
              <MenuColumn column={menuColumnLeft} />
              <MenuColumn column={menuColumnRight} />
            </div>
          )}

          <div className="mt-10 sm:mt-14 bg-[#31402f] px-6 py-8 sm:px-12 sm:py-11 flex items-center justify-between gap-8 flex-wrap">
            <div>
              <div className="font-['Della_Respira:Regular',sans-serif] text-[#f6f3e6] text-[26px] sm:text-[32px] mb-2">
                Ready when you are.
              </div>
              <div className="text-[#b9c6b2] text-[15px] sm:text-[16px]">
                Online booking takes about a minute — pick your service, pick your time.
              </div>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e9e5ca] text-[#26331f] text-[14px] sm:text-[16px] tracking-[.14em] px-7 py-4 sm:px-[38px] sm:py-[19px] rounded-sm whitespace-nowrap hover:bg-white transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Words */}
      <section id="words" className="bg-[#7e8e7f] py-16 sm:py-20 lg:py-[100px] px-5 sm:px-8 scroll-mt-[100px] sm:scroll-mt-[116px]">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-5 sm:gap-[26px]">
          <div className="font-['Della_Respira:Regular',sans-serif] text-[#e9e5ca] text-[48px] sm:text-[64px] leading-[0.6]">
            &ldquo;
          </div>
          <p className="font-['Della_Respira:Regular',sans-serif] text-white text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.55]">
            {activeTestimonial.comment}
          </p>
          <div className="text-[#e9e5ca] text-[14px] sm:text-[15px] tracking-[.1em]">
            {activeTestimonial.name} — {activeTestimonial.location}
          </div>
          <div className="flex gap-2.5 pt-1">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className="w-[9px] h-[9px] rounded-full border-none p-0 cursor-pointer transition-colors"
                style={{
                  background: testimonialIndex === i ? "#e9e5ca" : "rgba(233,229,202,.4)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="grid grid-cols-1 lg:grid-cols-2 bg-[#f4f4f1] scroll-mt-[100px] sm:scroll-mt-[116px]">
        <div className="min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden">
          <img alt="Nails Nest reception" src={imgVisit} className="w-full h-full object-cover" />
        </div>
        <div className="px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-24 flex flex-col gap-6 sm:gap-[30px]">
          <div className="text-[#7e8e7f] text-[12px] tracking-[.24em]">VISIT US</div>
          <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#2f3d2f] text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.1] font-normal">
            107 Oakdale Road,
            <br />
            Mount Roskill
          </h2>
          <div className="flex flex-col gap-2 text-[#3f483d] text-[16px] sm:text-[17px]">
            <div className="flex justify-between border-b border-[#dcdfd6] pb-2">
              <span>Mon – Thu, Sat</span>
              <span className="text-[#7e8e7f]">9:00am – 6:00pm</span>
            </div>
            <div className="flex justify-between border-b border-[#dcdfd6] pb-2">
              <span>Friday</span>
              <span className="text-[#7e8e7f]">9:00am – 7:00pm</span>
            </div>
            <div className="flex justify-between border-b border-[#dcdfd6] pb-2">
              <span>Sunday</span>
              <span className="text-[#7e8e7f]">10:00am – 7:00pm</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 text-[#3f483d] text-[16px] sm:text-[17px]">
            <a href="tel:0274579888" className="hover:opacity-80 transition-opacity w-fit">
              027 457 9888
            </a>
            <a href="mailto:Nailsnest.akl@gmail.com" className="hover:opacity-80 transition-opacity w-fit">
              Nailsnest.akl@gmail.com
            </a>
            <a
              href="https://www.facebook.com/nailsnest.hillsborough"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b6450] hover:opacity-80 transition-opacity w-fit"
            >
              facebook.com/nailsnest.hillsborough
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start bg-[#31402f] text-[#f6f3e6] text-[14px] sm:text-[15px] tracking-[.14em] px-7 py-4 sm:px-9 sm:py-[18px] rounded-sm mt-1.5 hover:bg-[#24331f] transition-colors"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#31402f] min-h-[88px] px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-5 flex-wrap py-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img alt="Nails Nest" src={imgLogo} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover" />
          <div className="font-['Della_Respira:Regular',sans-serif] text-[#e9e5ca] text-[13px] sm:text-[14px] tracking-[.14em]">
            NAILS NEST
          </div>
        </div>
        <div className="text-[#9fb098] text-[12px] sm:text-[13px] tracking-[.1em]">
          © 2026 NAILS NEST · HILLSBOROUGH, AUCKLAND
        </div>
      </footer>
    </div>
  );
}
