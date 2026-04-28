import { useState } from "react";
import Icon from "@/components/ui/icon";

const antiviruses = [
  {
    id: 1,
    name: "Kaspersky Total Security",
    vendor: "Kaspersky Lab",
    badge: "🥇 Выбор редакции",
    badgeColor: "from-yellow-500 to-amber-400",
    accent: "#a855f7",
    accentBg: "rgba(168, 85, 247, 0.08)",
    borderColor: "rgba(168, 85, 247, 0.3)",
    rating: 9.7,
    price: "от 1 990 ₽/год",
    description:
      "Флагманский продукт Kaspersky с максимальной защитой для всей семьи. Включает VPN, менеджер паролей, родительский контроль и защиту от кражи данных. Неизменно занимает первые строчки в независимых тестах AV-TEST и AV-Comparatives.",
    pros: ["Лучшее обнаружение угроз", "VPN в комплекте", "Менеджер паролей", "Кроссплатформенность"],
    cons: ["Высокая цена", "Требователен к ресурсам"],
    scores: { protection: 9.9, speed: 8.8, usability: 9.5, price: 8.0 },
    devices: 5,
    os: ["Windows", "macOS", "Android", "iOS"],
  },
  {
    id: 2,
    name: "ESET NOD32 Antivirus",
    vendor: "ESET",
    badge: "⚡ Самый быстрый",
    badgeColor: "from-cyan-500 to-blue-400",
    accent: "#22d3ee",
    accentBg: "rgba(34, 211, 238, 0.08)",
    borderColor: "rgba(34, 211, 238, 0.3)",
    rating: 9.3,
    price: "от 1 190 ₽/год",
    description:
      "Легендарный антивирус с минимальным влиянием на производительность системы. ESET NOD32 использует технологию ThreatSense для проактивного обнаружения новых угроз. Идеален для слабых и средних ПК, не замедляет работу даже при полном сканировании.",
    pros: ["Минимальная нагрузка на систему", "Быстрое сканирование", "Эффективная эвристика", "Доступная цена"],
    cons: ["Нет VPN", "Базовый функционал в NOD32"],
    scores: { protection: 9.2, speed: 9.9, usability: 9.0, price: 9.2 },
    devices: 3,
    os: ["Windows", "macOS", "Android"],
  },
  {
    id: 3,
    name: "Bitdefender Total Security",
    vendor: "Bitdefender",
    badge: "🛡️ Лучшая защита",
    badgeColor: "from-red-500 to-pink-400",
    accent: "#ec4899",
    accentBg: "rgba(236, 72, 153, 0.08)",
    borderColor: "rgba(236, 72, 153, 0.3)",
    rating: 9.5,
    price: "от 1 750 ₽/год",
    description:
      "Румынский гигант с непревзойдённым уровнем защиты и богатым набором функций. Технология Advanced Threat Defense отслеживает поведение приложений в реальном времени. В 2025 году набрал 100% в тестах защиты от вирусов AV-TEST шесть раз подряд.",
    pros: ["100% обнаружение в тестах", "Защита веб-камеры", "Продвинутый VPN", "Автопилот безопасности"],
    cons: ["Нагружает процессор при сканировании", "Сложный интерфейс"],
    scores: { protection: 9.9, speed: 8.5, usability: 8.8, price: 8.5 },
    devices: 5,
    os: ["Windows", "macOS", "Android", "iOS"],
  },
  {
    id: 4,
    name: "Norton 360 Deluxe",
    vendor: "Gen Digital",
    badge: "🔒 Топ по функциям",
    badgeColor: "from-orange-500 to-yellow-400",
    accent: "#f97316",
    accentBg: "rgba(249, 115, 22, 0.08)",
    borderColor: "rgba(249, 115, 22, 0.3)",
    rating: 9.1,
    price: "от 2 290 ₽/год",
    description:
      "Norton 360 — комплексное решение с облачным резервным копированием 50 ГБ, мощным VPN без ограничений и мониторингом Тёмного интернета. Защищает от программ-вымогателей с гарантией возврата денег в случае заражения.",
    pros: ["VPN без ограничений", "50 ГБ облачный бэкап", "Мониторинг Dark Web", "Гарантия от вирусов"],
    cons: ["Самая высокая цена", "Агрессивные уведомления"],
    scores: { protection: 9.5, speed: 8.2, usability: 8.7, price: 7.5 },
    devices: 5,
    os: ["Windows", "macOS", "Android", "iOS"],
  },
  {
    id: 5,
    name: "Dr.Web Security Space",
    vendor: "Доктор Веб",
    badge: "🇷🇺 Лучший отечественный",
    badgeColor: "from-green-500 to-emerald-400",
    accent: "#10b981",
    accentBg: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    rating: 8.8,
    price: "от 990 ₽/год",
    description:
      "Ведущий российский антивирус с 30-летней историей. Dr.Web особенно эффективен против угроз, распространённых в России и СНГ. Включает спам-фильтр, брандмауэр, родительский контроль и защиту от программ-вымогателей. Не передаёт данные за рубеж.",
    pros: ["Российская разработка", "Низкая цена", "Хорошее обнаружение СНГ-угроз", "Встроенный брандмауэр"],
    cons: ["Устаревший интерфейс", "Нет VPN", "Ниже в международных тестах"],
    scores: { protection: 8.5, speed: 8.8, usability: 7.5, price: 9.8 },
    devices: 3,
    os: ["Windows", "macOS", "Android"],
  },
  {
    id: 6,
    name: "Malwarebytes Premium",
    vendor: "Malwarebytes",
    badge: "🧹 Лучший для очистки",
    badgeColor: "from-violet-500 to-purple-400",
    accent: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.3)",
    rating: 8.6,
    price: "от 1 490 ₽/год",
    description:
      "Malwarebytes прославился как лучший инструмент для удаления существующего заражения. Premium-версия обеспечивает защиту в реальном времени и блокировку рекламы. Отлично работает в связке с другим антивирусом как дополнительный слой защиты.",
    pros: ["Отличное удаление угроз", "Блокировщик рекламы", "Совместим с другими антивирусами", "Простой интерфейс"],
    cons: ["Слабее в превентивной защите", "Нет брандмауэра"],
    scores: { protection: 8.2, speed: 9.3, usability: 9.5, price: 8.8 },
    devices: 3,
    os: ["Windows", "macOS", "Android", "iOS"],
  },
];

const categories = ["Все", "Windows", "macOS", "Android", "iOS"];

const ScoreBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <span className="text-xs font-ibm text-muted-foreground">{label}</span>
      <span className="text-xs font-bold font-montserrat" style={{ color }}>{value.toFixed(1)}</span>
    </div>
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{ width: `${(value / 10) * 100}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
      />
    </div>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating / 2);
  const half = rating % 2 >= 1;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < full ? "text-yellow-400" : i === full && half ? "text-yellow-400/60" : "text-white/20"}`}>★</span>
      ))}
    </div>
  );
};

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"rating" | "price">("rating");

  const filtered = antiviruses
    .filter((av) => activeCategory === "Все" || av.os.includes(activeCategory))
    .sort((a, b) => sortBy === "rating" ? b.rating - a.rating : a.rating - b.rating);

  return (
    <div className="min-h-screen bg-background noise-bg overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full opacity-15 blur-3xl animate-float" style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }} />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ background: "radial-gradient(circle, #ec4899, transparent)", animationDelay: "2s" }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 glass sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a855f7, #22d3ee)" }}>
                <Icon name="Shield" size={16} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-lg gradient-text">АнтивирусТОП</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-ibm">
              <Icon name="RefreshCw" size={14} />
              <span>Обновлено: апрель 2026</span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-ibm text-muted-foreground mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Независимый рейтинг · {antiviruses.length} антивирусов · 2026
          </div>
          <h1 className="font-montserrat font-black text-5xl sm:text-7xl leading-none mb-4 animate-slide-up stagger-1">
            <span className="gradient-text">Лучшие</span>
            <br />
            <span className="text-foreground">антивирусы</span>
          </h1>
          <p className="font-ibm text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up stagger-2">
            Сравниваем защиту, скорость и стоимость. Независимые тесты, реальные оценки, честные выводы.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-16 animate-slide-up stagger-3">
            {[
              { val: "99.9%", label: "Точность тестов" },
              { val: "6+", label: "Антивирусов" },
              { val: "2026", label: "Актуальность" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-montserrat font-black text-2xl gradient-text">{s.val}</div>
                <div className="font-ibm text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-montserrat font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "text-white shadow-lg"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeCategory === cat ? { background: "linear-gradient(135deg, #a855f7, #22d3ee)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-ibm">Сортировка:</span>
              <button
                onClick={() => setSortBy("rating")}
                className={`px-3 py-1.5 rounded-lg text-sm font-montserrat font-semibold transition-all ${sortBy === "rating" ? "text-white" : "glass text-muted-foreground"}`}
                style={sortBy === "rating" ? { background: "linear-gradient(135deg, #a855f7, #22d3ee)" } : {}}
              >
                По рейтингу
              </button>
              <button
                onClick={() => setSortBy("price")}
                className={`px-3 py-1.5 rounded-lg text-sm font-montserrat font-semibold transition-all ${sortBy === "price" ? "text-white" : "glass text-muted-foreground"}`}
                style={sortBy === "price" ? { background: "linear-gradient(135deg, #a855f7, #22d3ee)" } : {}}
              >
                По цене
              </button>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((av, idx) => {
              const isExpanded = expandedId === av.id;
              const isTop = idx === 0 && sortBy === "rating";
              return (
                <div
                  key={av.id}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${isTop ? "card-glow-gold lg:col-span-2" : "card-glow"} animate-slide-up`}
                  style={{
                    background: av.accentBg,
                    border: `1px solid ${av.borderColor}`,
                    animationDelay: `${idx * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  <div className={`p-6 ${isTop ? "sm:p-8" : ""}`}>
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-4">
                        {/* Logo placeholder */}
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-montserrat font-black text-xl text-white"
                          style={{ background: `linear-gradient(135deg, ${av.accent}33, ${av.accent}88)`, border: `1px solid ${av.accent}44` }}
                        >
                          {av.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span
                              className={`text-xs font-montserrat font-bold px-3 py-1 rounded-full bg-gradient-to-r ${av.badgeColor} text-white`}
                            >
                              {av.badge}
                            </span>
                          </div>
                          <h2 className={`font-montserrat font-black ${isTop ? "text-2xl sm:text-3xl" : "text-xl"} text-foreground leading-tight`}>
                            {av.name}
                          </h2>
                          <p className="font-ibm text-sm text-muted-foreground">{av.vendor}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex-shrink-0 text-right">
                        <div
                          className={`font-montserrat font-black ${isTop ? "text-5xl" : "text-4xl"} leading-none`}
                          style={{ color: av.accent }}
                        >
                          {av.rating}
                        </div>
                        <StarRating rating={av.rating} />
                        <div className="font-ibm text-xs text-muted-foreground mt-1">из 10.0</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-ibm text-sm text-muted-foreground leading-relaxed mb-5">
                      {av.description}
                    </p>

                    {/* Score bars */}
                    <div className={`grid ${isTop ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"} gap-3 mb-5`}>
                      <ScoreBar label="Защита" value={av.scores.protection} color={av.accent} />
                      <ScoreBar label="Скорость" value={av.scores.speed} color={av.accent} />
                      <ScoreBar label="Удобство" value={av.scores.usability} color={av.accent} />
                      <ScoreBar label="Цена/кач." value={av.scores.price} color={av.accent} />
                    </div>

                    {/* Pros/Cons toggle */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : av.id)}
                      className="flex items-center gap-2 text-sm font-montserrat font-semibold mb-3 transition-colors"
                      style={{ color: av.accent }}
                    >
                      <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
                      {isExpanded ? "Скрыть детали" : "Плюсы и минусы"}
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 animate-slide-up">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="ThumbsUp" size={14} className="text-green-400" />
                            <span className="font-montserrat font-bold text-xs text-green-400">Плюсы</span>
                          </div>
                          <ul className="space-y-1.5">
                            {av.pros.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-sm font-ibm text-foreground/80">
                                <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="ThumbsDown" size={14} className="text-red-400" />
                            <span className="font-montserrat font-bold text-xs text-red-400">Минусы</span>
                          </div>
                          <ul className="space-y-1.5">
                            {av.cons.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-sm font-ibm text-foreground/80">
                                <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Footer row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: `${av.accent}22` }}>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <Icon name="Monitor" size={14} className="text-muted-foreground" />
                          <span className="font-ibm text-sm text-muted-foreground">{av.devices} устр.</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {av.os.map((os) => (
                            <span key={os} className="text-xs px-2 py-0.5 rounded-md font-ibm" style={{ background: `${av.accent}15`, color: av.accent }}>
                              {os}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-montserrat font-bold text-foreground">{av.price}</span>
                        <button
                          className="px-5 py-2.5 rounded-xl font-montserrat font-bold text-sm text-white transition-all hover:scale-105 active:scale-95"
                          style={{ background: `linear-gradient(135deg, ${av.accent}cc, ${av.accent})` }}
                        >
                          Купить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-ibm text-sm text-muted-foreground">
              АнтивирусТОП — независимый обзорный ресурс. Оценки основаны на тестах AV-TEST и AV-Comparatives.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
