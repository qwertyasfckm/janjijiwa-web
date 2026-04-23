import Image from "next/image";
import { Coffee, Award, Users, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D2C23]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E6D5C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#8E5E3D] rounded-full flex items-center justify-center">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#3D2C23]">Janji Jiwa</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#cerita" className="text-[#6B503D] hover:text-[#8E5E3D] font-medium transition-colors">Cerita Kami</a>
              <a href="#menu" className="text-[#6B503D] hover:text-[#8E5E3D] font-medium transition-colors">Produk Kami</a>
              <a href="#berita" className="text-[#6B503D] hover:text-[#8E5E3D] font-medium transition-colors">Berita Terkini</a>
            </nav>
            <a href="#menu" className="bg-[#8E5E3D] hover:bg-[#724A2F] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm inline-block">
              Pesan Sekarang
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F2E8DB]">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#8E5E3D 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center pt-16 pb-24 gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#3D2C23] leading-tight mb-6">
                Kopi Dari Hati,<br />
                <span className="text-[#8E5E3D]">Teman Sejati.</span>
              </h1>
              <p className="text-xl text-[#6B503D] mb-8 max-w-2xl mx-auto lg:mx-0">
                Menyajikan secangkir kopi dengan biji pilihan terbaik Nusantara. Dirancang untuk menemani setiap langkah dan ceritamu setiap hari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#menu" className="bg-[#8E5E3D] hover:bg-[#724A2F] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#8E5E3D]/30">
                  Lihat Menu Kopi <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#berita" className="bg-white hover:bg-[#FAF6F0] text-[#8E5E3D] border-2 border-[#8E5E3D] px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                  Berita Terkini
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-[#8E5E3D] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"></div>
              {/* Dummy illustration image to replace with actual coffee cup */}
              <img 
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop" 
                alt="Kopi Janji Jiwa" 
                className="relative z-10 bg-white rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto aspect-[4/5] object-center p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cerita / Tentang Section */}
      <section id="cerita" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#3D2C23]">Janji Jiwa & Filosofi Kami</h2>
            <div className="w-24 h-1 bg-[#8E5E3D] mx-auto rounded-full"></div>
            <p className="mt-6 text-[#6B503D] max-w-3xl mx-auto text-lg leading-relaxed">
              Kami berdiri karena kecintaan pada kopi lokal Indonesia dan keinginan untuk memberikan rasa yang bisa dinikmati semua kalangan. Dari petani lokal ke cangkir Anda, ini adalah janji kami kepada jiwa penikmat kopi Nusantara.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              {
                icon: <Award className="w-10 h-10 text-[#8E5E3D]" />,
                title: "Kopi Terbaik",
                desc: "Diambil dari perkebunan kopi di seluruh Indonesia, disangrai presisi untuk karakter rasa terbaik."
              },
              {
                icon: <Users className="w-10 h-10 text-[#8E5E3D]" />,
                title: "Petani Lokal",
                desc: "Komitmen kami memberdayakan dan memajukan petani kopi Nusantara demi rantai kopi berkelanjutan."
              },
              {
                icon: <Coffee className="w-10 h-10 text-[#8E5E3D]" />,
                title: "Racikan Konsisten",
                desc: "Diseduh dengan SOP standar didukung kru hebat, memastikan rasa yang selalu pas kapanpun kamu pesan."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#E6D5C3] text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 bg-[#F2E8DB] rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3D2C23]">{item.title}</h3>
                <p className="text-[#6B503D] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Unggulan Section */}
      <section id="menu" className="py-24 bg-[#3D2C23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FDFBF7]">Kopi Favorit Jiwa</h2>
            <div className="w-24 h-1 bg-[#8E5E3D] mx-auto rounded-full"></div>
            <p className="mt-6 text-[#E6D5C3] max-w-2xl mx-auto text-lg">
              Pilihan menu andalan yang paling banyak dipesan karena rasanya yang khas, cocok buat menemani hari-harimu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Kopi Susu", desc: "Espresso, susu, gula aren murni", img: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=800&auto=format&fit=crop" },
              { name: "Susu Soklat", desc: "Susu segar dengan cokelat premium", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop" },
              { name: "Americano", desc: "Double shot espresso & air", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" },
              { name: "Jiwa Toast", desc: "Roti panggang dengan isian gurih", img: "https://images.unsplash.com/photo-1525351484163-f5ce7e56d5c1?q=80&w=800&auto=format&fit=crop" }
            ].map((menu, idx) => (
              <div key={idx} className="bg-[#2D201A] rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <img src={menu.img} alt={menu.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{menu.name}</h3>
                  <p className="text-[#A48F82] text-sm">{menu.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href="#menu" className="inline-block border border-[#8E5E3D] text-[#8E5E3D] hover:bg-[#8E5E3D] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
               Lihat Semua Menu
             </a>
          </div>
        </div>
      </section>

      {/* Berita Terkini Section */}
      <section id="berita" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#3D2C23]">Terbaru dari Jiwa Group</h2>
            <div className="w-24 h-1 bg-[#8E5E3D] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Jiwa Barista Championship 2025: Panggung Besar untuk Barista Janji Jiwa Berkarya, Bertumbuh, dan Move in Good Vibes",
                date: "2025/11/27 - 10:36:31am",
                desc: "Janji Jiwa melalui Jiwa Group kembali menghadirkan Jiwa Barista Championship 2025, kompetisi internal berskala nasional yang menjadi ruang bagi para barista untuk mengasah kemampuan, mengekspresikan kreativitas, dan memperkuat passion di dunia kopi.",
                img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Janji Jiwa Culture: Tempat Baru untuk Hidupkan Good Vibes Sehari-hari",
                date: "2025/09/10 - 07:42:19pm",
                desc: "Janji Jiwa Culture bukan sekadar tempat ngopi. Ini adalah House of Good Vibes, tempat di mana kopi bukan satu-satunya hal yang diseduh, tapi juga percakapan, ide, bahkan tawa yang muncul tiba-tiba di tengah sore yang sibuk.",
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Biobriket dari Ampas Kopi: Solusi Inovatif untuk Energi Terbarukan dan Pengelolaan Limbah dari Janji Jiwa",
                date: "2024/08/01 - 02:01:33pm",
                desc: "Ampas kopi Janji Jiwa memiliki potensi besar untuk dijadikan salah satu bahan baku pembuatan bahan bakar alternatif yang ramah lingkungan.",
                img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop"
              }
            ].map((news, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-[#E6D5C3]">
                <div className="h-56 overflow-hidden border-b-4 border-[#E22E30]">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-[#A48F82] mb-3">{news.date}</p>
                  <h3 className="text-lg font-bold text-[#3D2C23] mb-4 leading-snug">{news.title}</h3>
                  <p className="text-[#6B503D] text-sm leading-relaxed mb-6 flex-1 line-clamp-4">{news.desc}</p>
                  <a href="#" className="text-[#3D2C23] font-bold text-sm flex items-center hover:text-[#E22E30] transition-colors uppercase tracking-wider mt-auto group">
                    SEE DETAIL <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="#" className="inline-block border-2 border-[#3D2C23] text-[#3D2C23] hover:bg-[#3D2C23] hover:text-white px-10 py-3 font-bold transition-colors uppercase text-sm tracking-wider">
              selengkapnya
            </a>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-24 bg-[#8E5E3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="w-24 h-1 bg-[#FDFBF7] mx-auto rounded-full mb-8 opacity-60"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's become our partner!</h2>
          <p className="text-xl text-[#FDFBF7]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be part of Jiwa Group family. Growing together advancing F&B industry<br className="hidden sm:block" /> in Indonesia.
          </p>
          <div className="flex justify-center">
            <a href="#" className="bg-white text-[#8E5E3D] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FAF6F0] transition-all shadow-xl hover:-translate-y-1">
              More Info
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A120E] pt-16 pb-8 border-t border-[#3D2C23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-[#3D2C23] pb-12 mb-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Coffee className="text-[#8E5E3D] w-8 h-8" />
                <span className="text-2xl font-bold text-white">Janji Jiwa</span>
              </div>
              <p className="text-[#A48F82] max-w-xs">Kopi Dari Hati, untuk menemani langkah sejuta jiwa.</p>
            </div>
            
            <div className="flex gap-12 text-[#A48F82] flex-wrap justify-center md:justify-end">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="font-semibold text-white mb-2">Perusahaan</span>
                <a href="#" className="hover:text-white transition-colors">Kisah Jiwa</a>
                <a href="#" className="hover:text-white transition-colors">Karir</a>
                <a href="#" className="hover:text-white transition-colors">Kerja Sama Jiwa</a>
              </div>
              <div className="flex flex-col gap-3 text-center md:text-left">
                <span className="font-semibold text-white mb-2">Bantuan</span>
                <a href="#" className="hover:text-white transition-colors">Hubungi Kami</a>
                <a href="#" className="hover:text-white transition-colors">FAQ (Tanya Jawab)</a>
                <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-[#A48F82] text-sm">
            <p>&copy; {new Date().getFullYear()} Jiwa Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
