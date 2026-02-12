import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ürünler | İkon Polimer",
  description: "İkon Polimer hammadde, boya ve kimyasal ürün kategorileri. Endüstriyel ihtiyaçlarınız için geniş ürün yelpazesi.",
};

const categories = [
  {
    title: "Polimer Hammaddeler",
    description:
      "Plastik ve kauçuk endüstrisi için çeşitli polimer hammaddeler. PE (Polietilen), PP (Polipropilen), PS (Polistiren), ABS, PVC ve mühendislik plastikleri gibi geniş ürün yelpazesi.",
    items: ["Polietilen (PE)", "Polipropilen (PP)", "Polistiren (PS)", "ABS", "PVC", "Mühendislik Plastikleri"],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    title: "Endüstriyel Boyalar",
    description:
      "Metal, ahşap ve plastik yüzeyler için yüksek performanslı endüstriyel boya ve kaplama sistemleri. Toz boya, sıvı boya, astar ve özel kaplama ürünleri.",
    items: ["Toz Boya", "Sıvı Endüstriyel Boya", "Astar (Primer)", "Epoksi Boya", "Poliüretan Boya", "Özel Kaplama"],
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600 bg-orange-100",
  },
  {
    title: "Kimyasal Çözücüler",
    description:
      "Üretim, temizleme ve proses süreçleri için endüstriyel kalitede kimyasal çözücüler. Aromatik, alifatik ve özel çözücü seçenekleri.",
    items: ["Toluen", "Ksilen", "Aseton", "MEK", "Etil Asetat", "White Spirit"],
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    title: "Katkı Maddeleri",
    description:
      "Plastik, boya ve kauçuk üretimi için performans artırıcı katkı maddeleri. UV stabilizatörler, antioksidanlar, dolgu maddeleri ve pigmentler.",
    items: ["UV Stabilizatörler", "Antioksidanlar", "Dolgu Maddeleri", "Pigmentler", "Plastifiyanlar", "Kaydırıcılar"],
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600 bg-purple-100",
  },
  {
    title: "Yapıştırıcılar ve Tutkallar",
    description:
      "Farklı endüstriyel uygulamalar için yapıştırıcı çözümleri. Epoksi, poliüretan, silikonlu ve sıcak eriyik yapıştırıcılar.",
    items: ["Epoksi Yapıştırıcı", "Poliüretan Yapıştırıcı", "Silikon", "Sıcak Eriyik", "Kontakt Yapıştırıcı", "Anaerobik Yapıştırıcı"],
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600 bg-red-100",
  },
  {
    title: "Reçine ve Bağlayıcılar",
    description:
      "Boya, kaplama ve kompozit üretimi için çeşitli reçine ve bağlayıcı sistemler. Alkid, epoksi, polyester ve akrilik reçineler.",
    items: ["Alkid Reçine", "Epoksi Reçine", "Polyester Reçine", "Akrilik Reçine", "Melamin Reçine", "Vinil Reçine"],
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600 bg-teal-100",
  },
];

export default function UrunlerPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Ürünlerimiz</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Endüstriyel üretim ihtiyaçlarınız için kapsamlı ürün kategorilerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className={`rounded-2xl p-6 border ${category.color} hover:shadow-md transition-shadow`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-white/80 text-gray-700 rounded-full border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Aradığınız ürünü bulamadınız mı?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ürün listemizde yer almayan özel talepleriniz için bizimle iletişime geçin.
            İhtiyacınıza uygun çözümü birlikte bulalım.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors text-lg"
          >
            İletişime Geçin
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
