import svgPaths from "../imports/svg-nt74wbh7om";
import imgImage16 from "/assets/image 9 (1).png";
import imgImage17 from "/assets/image 9 (2).png";
import imgImage18 from "/assets/image 9 (3).png";
import imgImage19 from "/assets/image 9 (4).png";
import imgImage20 from "/assets/image 9 (5).png";
import imgImage9 from "/assets/image 9 (6).png";
import imgImage10 from "/assets/image 9 (7).png";
import imgImage11 from "/assets/image 9 (8).png";
import imgImage12 from "/assets/image 9 (9).png";
import imgImage15 from "/assets/image 9 (0).png";
import imgPriceList2 from "/assets/Price List 2.png";
import imgPriceList1 from "/assets/Price List 1.png";
import imgImage14 from "/assets/image 11.png";
import imgImage13 from "/assets/image 12.webp";
import imgImage23 from "/assets/image 14.png";
import imgImage21 from "/assets/image 15.png";
import imgImage22 from "/assets/image 16.png";
import imgScreenshot20251202At1021511 from "/assets/banner.svg";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    comment: "The attention to detail is incredible. My nails look better than I could have imagined. Highly recommend!",
    name: "Sarah Mitchell",
    location: "Auckland"
  },
  {
    comment: "Such a calm and welcoming space. The team made me feel so comfortable and the results are stunning.",
    name: "Jessica Chen",
    location: "Auckland"
  },
  {
    comment: "Best nail salon experience I've had. Professional, friendly, and the quality is exceptional.",
    name: "Emma Thompson",
    location: "Auckland"
  },
  {
    comment: "Coming back every time! The care and precision they put into their work is unmatched.",
    name: "Rachel Williams",
    location: "Auckland"
  }
];

export default function ResponsiveHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="bg-[#f2f3f2] min-h-screen w-full">
      {/* Header Menu */}
      <header className="bg-[#7e8e7f] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05)] sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px] md:h-[100px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-[100px] w-[130px] sm:h-[140px] sm:w-[180px]">
                <img 
                  alt="Nail Nest Logo" 
                  className="h-full w-full object-contain" 
                  src={imgScreenshot20251202At1021511} 
                />
              </div>
              {/* <div className="text-[#e9e5ca]">
                <svg className="h-[20px] sm:h-[23px]" fill="none" viewBox="0 0 180 23">
                  <text x="0" y="18" fill="currentColor" fontSize="18" fontFamily="Lisu Bosa">
                    NAIL NEST
                  </text>
                </svg>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-['Lisu_Bosa:Bold',sans-serif] text-[#e9e5ca] text-[14px] lg:text-[16px]">
              <a href="#home" className="hover:opacity-80 transition-opacity">HOMEPAGE</a>
              <a href="#welcome" className="hover:opacity-80 transition-opacity">WELCOME</a>
              <a href="#menu" className="hover:opacity-80 transition-opacity">MENU</a>
              <a href="#gallery" className="hover:opacity-80 transition-opacity">GALLERY</a>
              <a href="#feedback" className="hover:opacity-80 transition-opacity">FEEDBACK</a>
              <a href="#follow" className="hover:opacity-80 transition-opacity">FOLLOW US</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity">CONTACT</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#e9e5ca] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#7e8e7f] border-t border-[#e9e5ca]/20">
            <nav className="flex flex-col px-4 py-4 gap-4 font-['Lisu_Bosa:Bold',sans-serif] text-[#e9e5ca] text-[14px]">
              <a href="#home" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>HOMEPAGE</a>
              <a href="#welcome" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>WELCOME</a>
              <a href="#menu" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>MENU</a>
              <a href="#gallery" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>GALLERY</a>
              <a href="#feedback" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>FEEDBACK</a>
              <a href="#follow" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>FOLLOW US</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section id="home" className="relative w-full h-[830px] overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="absolute inset-0">
          <img 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
            src={imgImage23} 
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="font-['Della_Respira:Regular',sans-serif] text-black text-[40px] sm:text-[60px] lg:text-[88px] leading-tight">
              <div>Where</div>
              <div>Beauty</div>
              <div>Finds Its Nest</div>
            </h1>
            <a href="https://www.fresha.com/vi/p/nails-nest-auckland-6028175?share=true&pId=2704594" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block bg-[#859588] text-white px-8 py-4 rounded-[12px] shadow-[4px_4px_0px_0px_#d6d6d6] hover:opacity-90 transition-opacity font-['Della_Respira:Regular',sans-serif] text-[18px] sm:text-[22px]">
              Book now
            </a>
          </div>
          
          {/* Hero Images - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:flex flex-col gap-4 relative">
            <div className="w-[280px] xl:w-[350px] h-[420px] xl:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img 
                alt="Nail care" 
                className="w-full h-full object-cover" 
                src={imgImage21} 
              />
            </div>
            <div className="w-[280px] xl:w-[350px] h-[180px] xl:h-[220px] rounded-lg overflow-hidden shadow-lg absolute bottom-0 -left-24 xl:-left-28">
              <img 
                alt="Foot care" 
                className="w-full h-full object-cover" 
                src={imgImage22} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="bg-[#faf5e7] py-12 sm:py-16 lg:py-24 relative overflow-hidden h-[660px] scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="absolute inset-0 w-full">
          <img 
            alt="Background" 
            className="w-full h-full object-cover" 
            src="/assets/OBJECTS.png" 
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="font-['Della_Respira:Regular',sans-serif] text-[#4b6450] space-y-6">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px]">Welcome to Nails Nest,</h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-justify">
              Located in the peaceful suburb of Hillsborough, Auckland, Nails Nest is a cozy boutique nail studio dedicated to gentle care, clean techniques, and beautifully crafted nails. We believe that every client deserves not only stunning results, but also a calm, comfortable space to unwind.
            </p>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-justify">
              At Nails Nest, we specialise in high-quality gel services, natural-looking manicures, elegant nail art, and relaxing pedicure treatments. Every detail — from our premium products to our personalized approach — is thoughtfully designed to give you a safe, refreshing, and satisfying experience.
            </p>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-justify">
              Whether you're after something simple and classic or a creative design that reflects your style, Nails Nest is your little beauty sanctuary.
            </p>
            <p className="text-[#24502c] text-[16px] sm:text-[18px] lg:text-[20px]">
              Step into our nest — and let your beauty feel at home ♥️
            </p>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="menu" className="py-12 sm:py-16 lg:py-20 bg-[#f2f3f2] scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img 
                alt="Price List 1" 
                className="w-full h-auto rounded-[40px]" 
                src={imgPriceList2} 
              />
            </div>
            <div className="w-full max-w-md lg:max-w-lg">
              <img 
                alt="Price List 2" 
                className="w-full h-auto rounded-[40px]" 
                src={imgPriceList1} 
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="https://www.fresha.com/vi/p/nails-nest-auckland-6028175?share=true&pId=2704594" target="_blank" rel="noopener noreferrer" className="bg-[#859588] text-white px-8 py-4 rounded-[12px] shadow-[4px_4px_0px_0px_#d6d6d6] hover:opacity-90 transition-opacity font-['Della_Respira:Regular',sans-serif] text-[18px] sm:text-[22px]">
              Book now
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-white py-12 sm:py-16 lg:py-20 scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#859588] text-[40px] sm:text-[52px] lg:text-[64px] mb-4">
              Stop Time. Stay Beautiful
            </h2>
            <p className="font-['Della_Respira:Regular',sans-serif] text-[#859588] text-[16px] sm:text-[18px] lg:text-[20px]">
              Images Gallery
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[imgImage15, imgImage16, imgImage17, imgImage18, imgImage19, imgImage20].map((img, idx) => (
              <div key={idx} className="aspect-square rounded-[24px] overflow-hidden">
                <img 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  src={img} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="relative py-12 sm:py-16 lg:py-24 min-h-[300px] sm:min-h-[400px] flex items-center justify-center scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="absolute inset-0">
          <img 
            alt="Feedback Background" 
            className="w-full h-full object-cover" 
            src={imgImage14} 
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="text-[#859588] hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Testimonial Content */}
            <div className="flex-1">
              <div className="font-['Della_Respira:Regular',sans-serif] text-[#859588] space-y-4">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px]">
                  " {testimonials[testimonialIndex].comment} "
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-[5px] overflow-hidden">
                  <img alt="Customer" className="w-full h-full object-cover" src={imgImage13} />
                </div>
              </div>
              <p className="mt-4 font-['Della_Respira:Regular',sans-serif] text-[#859588] text-[16px] sm:text-[18px]">
                <span className="text-[#bc8374]">{testimonials[testimonialIndex].name}</span>, {testimonials[testimonialIndex].location}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="text-[#859588] hover:opacity-70 transition-opacity"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Follow on Facebook Section */}
      <section id="follow" className="bg-white py-12 sm:py-16 lg:py-20 scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Della_Respira:Regular',sans-serif] text-[#859588] text-[40px] sm:text-[52px] lg:text-[64px] text-center mb-8">
            Follow on Facebook
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
              <path clipRule="evenodd" d={svgPaths.p23123600} fill="#3764B9" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p804e000} fill="#507DD2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p36070800} fill="#1E4BA0" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p165cb600} fill="white" fillRule="evenodd" />
            </svg>
            <a 
              className="font-['Della_Respira:Regular',sans-serif] text-[#4a9bf6] text-[16px] sm:text-[18px] underline hover:opacity-80 transition-opacity" 
              href="https://www.facebook.com/nailsnest.hillsborough"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/nailsnest.hillsborough
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[imgImage9, imgImage10, imgImage11, imgImage12].map((img, idx) => (
              <div key={idx} className="aspect-square rounded-[24px] overflow-hidden">
                <img 
                  alt={`Facebook ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  src={img} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#f2f3f2] scroll-mt-[80px] md:scroll-mt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-['Della_Respira:Regular',sans-serif] text-black text-[20px] sm:text-[24px] mb-4">
                Location
              </h3>
              <div className="font-['Della_Respira:Regular',sans-serif] text-black text-[14px] sm:text-[16px] space-y-1">
                <p>NAIL NEST Hillsborough</p>
                <p>107 Oakdale Road, Mount Roskill</p>
              </div>
            </div>
            <div>
              <h3 className="font-['Della_Respira:Regular',sans-serif] text-black text-[20px] sm:text-[24px] mb-4">
                Contacts
              </h3>
              <div className="font-['Della_Respira:Regular',sans-serif] text-black text-[14px] sm:text-[16px] space-y-1">
                <p>
                  Phone:{" "}
                  <a href="tel:0274579888" className="underline hover:opacity-80">
                    0274579888
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:Nailsnest.akl@gmail.com" className="underline hover:opacity-80">
                    Nailsnest.akl@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-['Della_Respira:Regular',sans-serif] text-black text-[20px] sm:text-[24px] mb-4">
                Opening Hours
              </h3>
              <div className="font-['Della_Respira:Regular',sans-serif] text-black text-[14px] sm:text-[16px] space-y-1">
                <p>Mon-Thu+Sat: 9:00AM - 6:00PM</p>
                <p>Friday: 9:00AM - 7:00PM</p>
                <p>Sunday: 10:00PM - 7:00PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-dashed border-[#859588] pt-6">
            <p className="font-['Della_Respira:Regular',sans-serif] text-[#859588] text-[14px] sm:text-[16px] text-center">
              © 2025 NAIL NEST. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}