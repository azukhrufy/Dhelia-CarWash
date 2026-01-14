import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Car,
  Sparkles,
  Droplets,
  Clock,
  MapPin,
  Phone,
  Menu,
  X,
  ChevronRight,
  Star,
  ShieldCheck,
  Zap,
  Calendar,
} from "lucide-react";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Robotic Wash", href: "#wash" },
    { name: "Detailing", href: "#detailing" },
    { name: "Technology", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Head>
        <title>Dhelia Carwash - Cuci Mobil Robotic Bandung & Cimahi | Pionir Car Wash Otomatis</title>
        <meta
          name="description"
          content="Cuci Mobil Robotic Bandung dan Cimahi terbaik! Dhelia Carwash pionir teknologi robotic touchless di Bandung. Bersih luar dalam, cepat, aman tanpa goresan. Detailing profesional & ceramic coating. Buka 24/7. Hubungi 0821-2905-4992"
        />
      </Head>
      <div className="font-sans text-slate-800 bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="rounded-lg transition-colors overflow-hidden">
              <img
                src="/images/dhelia-logo.jpg"
                style={{ width: "3rem", height: "3rem" }}
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-slate-900" : "text-white"
                }`}
            >
              DHELIA<span className="text-blue-500"> CARWASH</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? "text-slate-600" : "text-slate-200"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <button
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
              onClick={() =>
                window.open("https://wa.me/6282129054992", "_blank")
              }
            >
              Contact Us
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-slate-900" : "text-white"
                }`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      >
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
          {/* Animated decorative shapes */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Next Gen Automotive Care
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Precision{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Robotic
            </span>{" "}
            Care
            <br />
            For Your Vehicle
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cuci mobil robotic terbaik di Bandung dan Cimahi. Teknologi
            touchless modern untuk hasil bersih maksimal, cepat, dan aman.
            Layanan detailing profesional tersedia 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/40 flex items-center justify-center">
              View Packages
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Our Technology
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Touchless Wash", icon: Zap },
              { label: "Eco Friendly", icon: Droplets },
              { label: "Ceramic Pro", icon: ShieldCheck },
              { label: "Open 7 Days", icon: Calendar },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center space-x-3 text-slate-300"
              >
                <stat.icon className="w-5 h-5 text-blue-400" />
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Section */}
      <section id="tech" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
              Teknologi Kami
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Cuci Mobil Robotic Bandung & Cimahi
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sistem robotic Dhelia kami menggunakan teknologi kontur 3D untuk
              membersihkan setiap sudut kendaraan Anda tanpa risiko goresan
              mikro yang sering terjadi pada pencucian konvensional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Teknologi Mutakhir",
                desc: "Kami pionir robotic carwash di Bandung — menggunakan lengan robotik canggih yang memetakan dan membersihkan eksterior mobil secara menyeluruh, memberikan hasil bersih dan presisi setiap kali.",
                icon: ShieldCheck,
              },
              {
                title: "Cepat & Efisien",
                desc: "Proses pencucian otomatis yang menghemat waktu Anda hanya dalam hitungan menit dengan hasil sempurna.",
                icon: Zap,
              },
              {
                title: "Bersih Luar Dalam",
                desc: "Tim kami membersihkan mobil Anda dari luar dan dalam — mulai dari pencucian eksterior presisi hingga pembersihan interior menyeluruh, sehingga kendaraan Anda kembali bersih, harum, dan siap melaju dengan kilap sempurna.",
                icon: Sparkles,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing / Services */}
      <section id="wash" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Paket Cuci Mobil Robotic Bandung
            </h2>
            <p className="text-slate-600 mt-4">
              Pilih paket cuci mobil otomatis yang sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-1">
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Car Wash</h3>
                  <div className="my-4 flex flex-row">
                    <span className="text-sm text-slate-900">From</span>
                    <span className="text-4xl font-bold text-slate-900">40ribu</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    Membersihkan exterior mobil dengan teknologi robotic canggih.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Robotic High Pressure Wash",
                      "Spot Free Rinse",
                      "Flash Dry",
                      "Wheel Blast",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Zap className="w-3 h-3 text-blue-600" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors" onClick={() => window.open("https://wa.me/6282129054992", "_blank")}>
                  Select Package
                </button>
              </div>
            </div>

            {/* Premium Card */}
            <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-700 transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <h3 className="text-xl font-bold text-white">Car Wash + Kolong</h3>
                  <div className="my-4 flex flex-row">
                    <span className="text-sm text-white">From</span>
                    <span className="text-4xl font-bold text-white">50ribu</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-6">
                    Membersihkan exterior dan interior mobil dengan teknologi robotic canggih.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Robotic High Pressure Wash",
                      "Spot Free Rinse",
                      "Undercarriage Rust Inhibitor",
                      "Interior Vacuuming",
                      "Dashboard Wipe Down",
                      "Tire Shine Application",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center text-slate-200">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50" onClick={() => window.open("https://wa.me/6282129054992", "_blank")}>
                  Select Package
                </button>
              </div>
            </div>

            {/* Gold Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-1">
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Car Wash + Wax</h3>
                  <div className="my-4 flex flex-row">
                    <span className="text-sm text-slate-900">From</span>
                    <span className="text-4xl font-bold text-slate-900">100ribu</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    Penambahan Wax agar mobil lebih berkilau dan terlindungi lebih lama.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Robotic High Pressure Wash",
                      "Spot Free Rinse",
                      "Undercarriage Rust Inhibitor",
                      "Interior Vacuuming",
                      "Dashboard Wipe Down",
                      "Ceramic Sealant Wax",
                      "Clear Coat Protectant",
                      "Tire Shine Application",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Zap className="w-3 h-3 text-blue-600" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors" onClick={() => window.open("https://wa.me/6282129054992", "_blank")}>
                  Select Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Detailing Services */}
      <section id="detailing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Detailing Mobil Profesional Bandung
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Selain cuci mobil robotic, tim detailer ahli kami mengembalikan
                kendaraan Anda ke kondisi showroom. Kami menggunakan produk
                premium dan teknik terbaik untuk hasil maksimal.
              </p>

              <div className="space-y-6">
                {[
                  {
                    name: "Small Car",
                    price: "1,3 Juta",
                    desc: "Full Detailing untuk Mobil Kecil termasuk pembersihan interior dan eksterior menyeluruh.",
                  },
                  {
                    name: "Medium Car",
                    price: "1,7 Juta",
                    desc: "Full Detailing untuk Mobil Sedang termasuk pembersihan interior dan eksterior menyeluruh.",
                  },
                  {
                    name: "Large Car",
                    price: "2 Juta",
                    desc: "Full Detailing untuk Mobil Besar termasuk pembersihan interior dan eksterior menyeluruh.",
                  },
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start border-b border-slate-100 pb-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {service.name}
                      </h4>
                      <p className="text-slate-500 mt-1">{service.desc}</p>
                    </div>
                    <span className="text-blue-600 font-bold whitespace-nowrap ml-4">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/testimoni1.webp"
                alt="Detailing Process"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <p className="text-white font-medium">
                    "Memuaskan hasil cuci nya bersih wangi
                    Tempat nunggu nya cozy banget bisa buat santai sambil nunggu hasil cucian mobil
                    Cafe nya bersih, makanan enak, ada kursi pijat nyaa makin betah nunggu"
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-slate-300 text-sm ml-3">
                      - Obos Boskiw, Customer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Mobil Bersih Kilap?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Kunjungi Dhelia Carwash Bandung & Cimahi sekarang. Cuci mobil
            robotic 24/7, booking detailing online tersedia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
              onClick={() => window.open("https://wa.me/6282129054992", "_blank")}
            >
              Book Detailing Now
            </button>
            <button
              className="px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors"
              onClick={() => window.open("https://maps.app.goo.gl/yV4KkAVvwpvNZoJn9", "_blank")}
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                DHELIA<span className="text-blue-500">{' '}CARWASH</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pionir cuci mobil robotic di Bandung dan Cimahi. Layanan car wash
              otomatis dan detailing profesional dengan teknologi terdepan.
              Bersih, cepat, dan presisi tinggi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Robotic Wash
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Interior Detailing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Fleet Accounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span>
                  Jl. HMS Mintareja Sarjana Hukum No. 3A<br />
                  Bandung, Jawa Barat
                </span>
              </li>
              <li className="flex items-center" style={{
                cursor: 'pointer'
              }} onClick={() =>
                window.open("https://wa.me/6282129054992", "_blank")
              }>
                <Phone className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span>6282129054992</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <span>
                  Setiap Hari : 06:00 - 23:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Location</h4>
            <div className="bg-slate-800 h-40 rounded-xl flex items-center justify-center border border-slate-700">
              <span className="text-xs font-mono uppercase tracking-widest">
                [Map Placeholder]
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Dhelia Robotic Car Wash &
            Automotive Detailing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default App;
