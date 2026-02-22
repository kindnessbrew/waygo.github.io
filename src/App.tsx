/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Truck, 
  MapPin, 
  Package, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Search,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  ChevronDown,
  Smartphone,
  BarChart3,
  Leaf
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 md:px-12 flex justify-between items-center transition-all duration-300 h-16">
      <div className="flex items-center">
        <img 
          src="https://i.ibb.co/KzK1D2jH/1771699494314.png" 
          alt="Waygo Logo" 
          className="h-24 w-auto object-contain -ml-4" 
        />
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#mission" className="hover:text-black transition-colors">Misyonumuz</a>
        <a href="#services" className="hover:text-black transition-colors">Hizmetler</a>
        <a href="#how-it-works" className="hover:text-black transition-colors">Nasıl Çalışır?</a>
        <a href="#faq" className="hover:text-black transition-colors">SSS</a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">Giriş Yap</a>
        <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Hemen Başla
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white p-6 flex flex-col space-y-6 border-b border-gray-100 md:hidden shadow-xl"
          >
            <a href="#mission" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Misyonumuz</a>
            <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Hizmetler</a>
            <a href="#how-it-works" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Nasıl Çalışır?</a>
            <a href="#faq" className="text-lg font-medium" onClick={() => setIsOpen(false)}>SSS</a>
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-4">
              <button className="w-full py-3 text-center font-medium border border-gray-200 rounded-lg">Giriş Yap</button>
              <button className="w-full py-3 text-center font-medium bg-black text-white rounded-lg">Hemen Başla</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-semibold tracking-wide uppercase mb-6 text-gray-600">
              Lojistiğin Yeni Çağı
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8 text-black">
              Yapay Zeka ile <br className="hidden md:block" />
              <span className="text-gray-400">Sınırları Kaldırın.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Waygo, karmaşık lojistik süreçlerini otonom yapay zeka ile basitleştirir. 
              Daha hızlı, daha güvenli ve tamamen şeffaf.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div 
              className="relative w-full md:w-auto"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 relative z-20">
                Hemen Gönder <ArrowRight size={20} />
              </button>

              <AnimatePresence>
                {isHovering && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 overflow-hidden hidden md:block"
                  >
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-black">Canlı Takip</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400">#WY-8821</span>
                    </div>
                    
                    <div className="h-32 bg-gray-50 rounded-xl relative overflow-hidden mb-4 border border-gray-100">
                       {/* Map Grid Pattern */}
                       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                       
                       {/* Roads */}
                       <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <path d="M40,100 C80,80 120,110 160,60 S240,40 280,20" fill="none" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
                         <path d="M40,100 C80,80 120,110 160,60 S240,40 280,20" fill="none" stroke="black" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                       </svg>
                       
                       {/* Moving Truck */}
                       <motion.div
                         className="absolute top-0 left-0"
                         animate={{ 
                           offsetDistance: "100%"
                         }}
                         style={{
                           offsetPath: 'path("M40,100 C80,80 120,110 160,60 S240,40 280,20")',
                           offsetRotate: 'auto'
                         }}
                         transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: "linear"
                         }}
                       >
                         <div className="bg-black text-white p-1.5 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                            <Truck size={10} />
                         </div>
                       </motion.div>
                       
                       {/* Destination Marker */}
                       <div className="absolute top-[20px] right-[40px] transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-black">
                           <Truck size={14} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-black">Kurye Yolda</div>
                          <div className="text-[10px] text-gray-500">Tahmini Varış: 12 dk</div>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="text-xs font-bold text-black">3.2 km</div>
                         <div className="text-[10px] text-gray-500">Kalan Mesafe</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button className="w-full md:w-auto bg-gray-100 text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all">
              Demo Talep Et
            </button>
          </motion.div>
        </div>

        {/* Abstract UI Visualization */}
        <div className="relative max-w-lg mx-auto mt-12 h-48 flex items-center justify-center">
            <motion.div 
              animate={{ 
                opacity: [0, 0, 1, 1, 0],
                scale: [0.5, 0.5, 1, 1, 0.5],
              }}
              transition={{ 
                duration: 3,
                times: [0, 0.6, 0.75, 0.9, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    <Package size={20} />
                  </div>
                  <div>
                    <div className="font-bold">Kargo #WY-8821</div>
                    <div className="text-xs text-gray-500">İstanbul → Berlin</div>
                  </div>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  Yolda
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tahmini Varış</span>
                  <span className="font-medium">Bugün, 14:30</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-black h-full w-3/4 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Alındı</span>
                  <span>Teslimatta</span>
                </div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Vertical Transport Animation connecting to Mission */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-gray-200 to-transparent z-0">
        <motion.div
          className="absolute -left-3 p-1.5 bg-white rounded-full border border-gray-100 shadow-sm"
          initial={{ bottom: "0%", opacity: 0 }}
          animate={{ bottom: "100%", opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
        >
          <Truck size={14} className="text-black -rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Hedefimiz: <br />
              <span className="text-gray-400">Sıfır Sürtünme, Maksimum Verim.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lojistik sektörü yıllardır verimsiz süreçler, kağıt işleri ve belirsizliklerle dolu. 
              Waygo olarak misyonumuz, bu karmaşayı yapay zeka destekli otonom sistemlerle çözmek.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Sadece bir kargo şirketi değiliz; tedarik zincirini dijitalleştiren, karbon ayak izini 
              optimize eden ve küresel ticareti herkes için erişilebilir kılan bir teknoloji şirketiyiz.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2 text-black">%40</div>
                <div className="text-sm text-gray-500">Daha Hızlı Teslimat</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-black">-30%</div>
                <div className="text-sm text-gray-500">Karbon Emisyonu</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
              <Leaf className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-black">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                AI algoritmalarımız boş dönüşleri minimize eder ve en çevreci rotaları seçerek karbon ayak izini azaltır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <BarChart3 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-black">Veri Odaklılık</h3>
              <p className="text-gray-600">
                Her gönderi, sistemimizi daha akıllı hale getiren bir veri noktasıdır. Sürekli öğrenen bir ağ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Anlık Kurye (Waygo Now)",
      desc: "Şehir içi gönderileriniz için 45 dakika içinde teslimat garantisi. Motokurye veya araç seçenekleriyle.",
      icon: <Clock size={24} />
    },
    {
      title: "Akıllı Depolama",
      desc: "E-ticaret stoklarınızı Waygo Fulfillment merkezlerinde saklayın, sipariş geldiğinde biz paketleyip gönderelim.",
      icon: <Package size={24} />
    },
    {
      title: "Global Forwarding",
      desc: "Gümrük işlemleri dahil, uçtan uca uluslararası taşımacılık. Dijital evrak yönetimi ile bürokrasi yok.",
      icon: <Globe size={24} />
    },
    {
      title: "Kurumsal Filo Yönetimi",
      desc: "Kendi araç filonuzu Waygo'nun AI rotalama yazılımı ile yönetin, yakıt ve zamandan tasarruf edin.",
      icon: <Truck size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ne Sunuyoruz?</h2>
          <p className="text-gray-500 text-lg">
            Bireysel gönderilerden devasa tedarik zinciri operasyonlarına kadar, 
            ihtiyacınız olan her şey tek platformda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Detaylı İncele <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Talep Oluştur",
      desc: "Uygulama üzerinden gönderi detaylarını girin. AI anında en iyi fiyatı ve rotayı hesaplar."
    },
    {
      num: "02",
      title: "Akıllı Eşleşme",
      desc: "Sistem, gönderinize en uygun aracı veya kuryeyi saniyeler içinde yönlendirir."
    },
    {
      num: "03",
      title: "Canlı Takip",
      desc: "Kargonuzun her hareketini harita üzerinden gerçek zamanlı izleyin. Sürpriz yok."
    },
    {
      num: "04",
      title: "Güvenli Teslimat",
      desc: "QR kodlu teslimat onayı ile gönderiniz doğru kişiye, tam zamanında ulaşır."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 sticky top-32">
              Nasıl <br /> Çalışır?
            </h2>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 md:gap-10 border-b border-gray-200 pb-12 last:border-0">
                <div className="text-4xl md:text-6xl font-bold text-gray-200 font-mono">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Waygo'nun fiyatlandırması nasıl çalışır?",
      a: "Dinamik fiyatlandırma modelimiz; mesafe, trafik yoğunluğu, paket boyutu ve talep durumuna göre en adil fiyatı anlık olarak hesaplar. Gizli ücret yoktur."
    },
    {
      q: "Hangi bölgelerde hizmet veriyorsunuz?",
      a: "Şu anda İstanbul, Ankara ve İzmir'de şehir içi kurye hizmetimiz aktiftir. Şehirlerarası ve uluslararası gönderimlerde ise tüm Türkiye ve 80+ ülkeye hizmet veriyoruz."
    },
    {
      q: "Gönderim sigortalı mı?",
      a: "Evet, Waygo üzerinden yapılan tüm gönderiler standart olarak 5.000 TL'ye kadar sigortalıdır. Değerli gönderileriniz için ek sigorta paketleri satın alabilirsiniz."
    },
    {
      q: "Kurumsal entegrasyon (API) sağlıyor musunuz?",
      a: "Kesinlikle. E-ticaret siteniz veya ERP sisteminiz için RESTful API dokümantasyonumuz mevcuttur. Geliştirici portalımızdan hemen test etmeye başlayabilirsiniz."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Sıkça Sorulan Sorular</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-black"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="mb-6">
              <img 
                src="https://i.ibb.co/KzK1D2jH/1771699494314.png" 
                alt="Waygo Logo" 
                className="h-24 w-auto object-contain -ml-4" 
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lojistiği yeniden tanımlıyoruz. <br />
              Daha hızlı, daha yeşil, daha akıllı.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Keşfet</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#mission" className="hover:text-black transition-colors">Misyonumuz</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Hizmetler</a></li>
              <li><a href="#how-it-works" className="hover:text-black transition-colors">Nasıl Çalışır?</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Kariyer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Yasal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Çerez Politikası</a></li>
              <li><a href="#" className="hover:text-black transition-colors">KVKK Aydınlatma</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Bülten</h4>
            <p className="text-gray-500 text-sm mb-4">
              Lojistik trendleri ve Waygo güncellemeleri için abone olun.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="bg-gray-50 border border-gray-200 text-black px-4 py-2 rounded-lg w-full focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 Waygo Logistics Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <span>İstanbul, TR</span>
            <span>Berlin, DE</span>
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white scroll-smooth relative">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}


