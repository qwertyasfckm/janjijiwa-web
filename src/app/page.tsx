import { Coffee, Award, Users, MapPin, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <Header />

      {/* Hero Section Carousel */}
      <HeroCarousel />

      {/* Cerita / Tentang Section */}
      <section id="cerita" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-[#222222]">Brand Kami</h2>
            <div className="w-12 h-[2px] bg-[#FF3548] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                logo: (
                  <div className="flex items-center justify-center h-48 mb-4">
                    <img src="/logo-jiwa.png" alt="Janji Jiwa Logo" className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" />
                  </div>
                ),
                title: "Janji Jiwa",
                desc: "Your daily pick for good coffee and even better vibes."
              },
              {
                logo: (
                  <div className="flex items-center justify-center h-48 mb-4">
                    <img src="/logo-sejuta-jiwa.png" alt="Kopi Sejuta Jiwa Logo" className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" />
                  </div>
                ),
                title: "Kopi Sejuta Jiwa",
                desc: "Great coffee on a cart, good vibes on the go."
              },
              {
                logo: (
                  <div className="flex items-center justify-center h-48 mb-4">
                    <img src="/logo-jiwa-culture.png" alt="Janji Jiwa Culture Logo" className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" />
                  </div>
                ),
                title: "Janji Jiwa Culture",
                desc: "Your lifestyle space for coffee, community, and good vibes."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-300">
                {item.logo}
                <div className="flex-1 flex flex-col pt-4">
                  <h3 className="text-lg font-black mb-3 text-[#222222]">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1">{item.desc}</p>
                  <a href="#" className="font-bold text-xs flex items-center text-[#222222] hover:text-[#FF3548] transition-colors mt-8 group uppercase tracking-widest">
                    SEE DETAIL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Unggulan Section */}
      <section id="menu" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-[#222222]">Menu Favorit Jiwa</h2>
            <div className="w-12 h-[2px] bg-[#FF3548] mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Pilihan menu andalan yang paling banyak dipesan karena rasanya yang khas, cocok buat menemani hari-harimu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Kopi Susu Sejuta Jiwa", desc: "Espresso, susu, gula aren murni", img: "/kopisusu-sejuta-jiwa.jpeg" },
              { name: "Es Coklat", desc: "Susu segar dengan cokelat premium", img: "/es-coklat.jpeg" },
              { name: "Peach Americano", desc: "Kesegaran kopi dengan manis peach", img: "/peach-americano.jpeg" },
              { name: "Jiwa Toast", desc: "Roti panggang dengan isian gurih", img: "/jiwa-toast.jpeg" }
            ].map((menu, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img src={menu.img} alt={menu.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#222222] mb-1">{menu.name}</h3>
                  <p className="text-gray-500 text-sm">{menu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita Terkini Section */}
      <section id="berita" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 text-[#222222]">Terbaru dari Jiwa Group</h2>
            <div className="w-12 h-[2px] bg-[#FF3548] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Jiwa Barista Championship 2025: Panggung Besar untuk Barista Janji Jiwa Berkarya...",
                date: "2025/11/27 - 10:36:31am",
                desc: "Janji Jiwa melalui Jiwa Group kembali menghadirkan Jiwa Barista Championship 2025, kompetisi internal berskala nasional yang menjadi ruang bagi para barista...",
                img: "/berita-barista.jpeg"
              },
              {
                title: "Janji Jiwa Culture: Tempat Baru untuk Hidupkan Good Vibes Sehari-hari",
                date: "2025/09/10 - 07:42:19pm",
                desc: "Janji Jiwa Culture bukan sekadar tempat ngopi. Ini adalah House of Good Vibes, tempat di mana kopi bukan satu-satunya hal yang diseduh, tapi juga percakapan, ide, bahkan tawa...",
                img: "/berita-culture.jpeg"
              },
              {
                title: "Biobriket dari Ampas Kopi: Solusi Inovatif untuk Energi Terbarukan",
                date: "2024/08/01 - 02:01:33pm",
                desc: "Ampas kopi Janji Jiwa memiliki potensi besar untuk dijadikan salah satu bahan baku pembuatan bahan bakar alternatif yang ramah lingkungan.",
                img: "/berita-biobriket.jpeg"
              }
            ].map((news, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden border-b-[3px] border-[#FF3548]">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-3">{news.date}</p>
                  <h3 className="text-base font-black text-[#222222] mb-3 leading-snug">{news.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{news.desc}</p>
                  <a href="#" className="text-[#222222] font-black text-xs flex items-center hover:text-[#FF3548] transition-colors uppercase tracking-widest mt-auto group">
                    SEE DETAIL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-24 bg-[#2D1636] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200c50-20 100 30 150 10s100-80 200-50 150 100 250 80 150-120 250-100 150 60 150 60M0 400c80 30 150-50 250-20s150 100 300 50 200-150 350-100 100 80 100 80M0 600c100-40 200 60 300 20s200-120 400-80 300 150 300 150M0 800c120 50 250-80 400-30s250 150 450 100 150-50 150-50' stroke='white' fill='none' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M-50 100c60-30 120 40 180 20s120-100 240-60 180 120 300 100 180-140 300-120 180 80 180 80M-50 300c100 40 180-60 300-20s180 120 360 60 240-180 420-120 120 100 120 100M-50 500c120-50 240 80 360 30s240-140 480-100 360 180 360 180M-50 700c140 60 300-100 480-40s300 180 540 120 200-60 200-60' stroke='white' fill='none' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '1000px 1000px'
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="w-12 h-[3px] bg-[#FF3548] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Let's become our partner!</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be part of Jiwa Group family. Growing together advancing F&B industry in Indonesia.
          </p>
          <div className="flex justify-center">
            <a href="#" className="bg-[#FF4D4D] text-white px-10 py-3 font-bold text-lg hover:bg-white hover:text-[#2D1636] transition-all shadow-lg uppercase tracking-wider">
              More Info
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left section */}
            <div className="lg:w-1/2">
              <a href="/" className="inline-block mb-4">
                <img src="/Jiwa-Group-Logo_JJ-PURPLE.png" alt="Jiwa Group Logo" className="h-14 w-auto object-contain" />
              </a>
              <div className="w-12 h-[2px] bg-[#FF3548] mb-6"></div>
              <p className="text-[#222222] text-sm mb-8">PT Luna Boga Narayan</p>

              <h4 className="font-bold text-[#222222] mb-4">Contact Us</h4>
              <button className="bg-[#FF3548] text-white px-8 py-2.5 font-bold border border-[#222222] mb-12 w-fit pointer-events-none cursor-default">
                Jiwa Care
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-bold text-[#222222] sm:mr-4">Follow us on</span>
                <div className="flex gap-4">
                  <div className="flex items-center justify-center gap-2 border border-[#222222] px-4 py-2 w-fit opacity-50 cursor-default">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    <span className="font-bold text-sm">Youtube</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 border border-[#222222] px-4 py-2 w-fit opacity-50 cursor-default">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span className="font-bold text-sm">Instagram</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section grids */}
            <div className="flex flex-col sm:flex-row gap-16 lg:w-1/2 lg:justify-end">
              <div className="flex flex-col gap-5">
                <h4 className="font-black text-[#222222] text-base tracking-wide mb-1 uppercase">BRAND</h4>
                <span className="text-[#222222] text-sm cursor-default">Janji Jiwa Culture</span>
                <span className="text-[#222222] text-sm cursor-default">Kopi Sejuta Jiwa</span>
                <span className="text-[#222222] text-sm cursor-default">Janji Jiwa</span>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-black text-[#222222] text-base tracking-wide mb-1 uppercase">JIWA+</h4>
                <p className="font-bold text-[#222222] text-sm">Download Now</p>
                <div className="flex flex-col gap-3">
                  <div className="opacity-50 cursor-default">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="h-10 w-auto" />
                  </div>
                  <div className="opacity-50 cursor-default whitespace-nowrap">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="bg-[#Fdfbf7] py-6 text-center border-t border-gray-200">
          <p className="text-[#222222] text-sm">&copy; {new Date().getFullYear()} Jiwa Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
