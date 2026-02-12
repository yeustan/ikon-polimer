import Hero from "@/components/Hero";
import Link from "next/link";

const products = [
  {
    title: "Hammadde Tedariği",
    description: "Plastik, kauçuk ve polimer sektörü için yüksek kaliteli hammadde tedariği.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Endüstriyel Boya",
    description: "Çeşitli sanayi kollarına uygun endüstriyel boya ve kaplama ürünleri.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Kimyasal Ürünler",
    description: "Üretim süreçleriniz için ihtiyaç duyduğunuz kimyasal ürün çeşitliliği.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Teknik Danışmanlık",
    description: "Doğru ürün seçimi ve uygulama konusunda teknik destek ve danışmanlık hizmeti.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Yılların Deneyimi",
    description: "Kimya sektöründe uzun yıllara dayanan bilgi birikimi ve tecrübe.",
  },
  {
    title: "Kaliteli Ürünler",
    description: "Sertifikalı, test edilmiş ve standartlara uygun ürün portföyü.",
  },
  {
    title: "Hızlı Teslimat",
    description: "Geniş stok kapasitesi ile zamanında teslimat garantisi.",
  },
  {
    title: "Müşteri Odaklılık",
    description: "İhtiyaçlarınıza özel çözümler ve satış sonrası destek.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Products / Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ürün ve Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Endüstriyel ihtiyaçlarınız için kapsamlı ürün yelpazesi ve profesyonel hizmetler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  {product.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors"
            >
              Tüm ürünleri inceleyin
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Neden İkon Polimer?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilirlik, kalite ve müşteri memnuniyeti odaklı çalışma anlayışımız ile fark yaratıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="text-center">
                <div className="w-12 h-12 bg-accent/10 text-accent-dark rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Projeleriniz için doğru çözüm ortağını mı arıyorsunuz?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            İhtiyaçlarınızı dinlemek ve size en uygun çözümü sunmak için buradayız.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-gray-900 font-semibold rounded-xl transition-colors text-lg"
          >
            Hemen İletişime Geçin
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
