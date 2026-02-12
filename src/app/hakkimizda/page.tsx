import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | İkon Polimer",
  description: "İkon Polimer Kimya Sanayi Ticaret Ltd. Şti. hakkında bilgi edinin. Misyonumuz, vizyonumuz ve faaliyet alanlarımız.",
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Kimya sektöründe güvenilir çözüm ortağınız olarak yılların deneyimini sizinle paylaşıyoruz.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Şirketimiz</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                <strong className="text-gray-900">İkon Polimer Kimya Sanayi Ticaret Limited Şirketi</strong>,
                endüstriyel hammadde, boya ve kimyasal ürün tedariği alanında faaliyet gösteren güvenilir bir tedarikçidir.
              </p>
              <p>
                Müşterilerimizin üretim süreçlerinde ihtiyaç duydukları kaliteli hammadde ve kimyasal ürünleri,
                rekabetçi fiyatlar ve zamanında teslimat ile sağlamaktayız. Sektördeki deneyimimiz ve geniş tedarik
                ağımız sayesinde, farklı endüstri kollarına hizmet vermekteyiz.
              </p>
              <p>
                Kalite, güven ve müşteri memnuniyeti odaklı çalışma prensibimiz ile sektörde fark yaratmayı
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Endüstriyel müşterilerimize en kaliteli hammadde ve kimyasal ürünleri, en uygun koşullarda
                tedarik ederek üretim süreçlerinin verimliliğine katkı sağlamak. Güvenilir, hızlı ve çözüm
                odaklı hizmet anlayışımızla sektörde tercih edilen bir iş ortağı olmak.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-accent/10 text-accent-dark rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye&apos;nin kimyasal hammadde tedariğinde lider firmalarından biri olmak. Sürekli gelişen
                ürün portföyümüz, geniş tedarik ağımız ve müşteri odaklı yaklaşımımızla sektörde referans
                noktası haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Faaliyet Alanlarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Polimer Hammaddeler",
                description: "PE, PP, PS, ABS ve diğer mühendislik plastikleri tedariği.",
              },
              {
                title: "Endüstriyel Boyalar",
                description: "Toz boya, sıvı boya ve özel kaplama ürünleri.",
              },
              {
                title: "Kimyasal Çözücüler",
                description: "Üretim ve temizlik süreçleri için çeşitli çözücü ürünler.",
              },
              {
                title: "Katkı Maddeleri",
                description: "Plastik ve boya üretimi için performans artırıcı katkılar.",
              },
              {
                title: "Yapıştırıcılar",
                description: "Endüstriyel yapıştırıcı ve tutkal çözümleri.",
              },
              {
                title: "Teknik Destek",
                description: "Ürün seçimi ve uygulama konusunda uzman danışmanlık.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
