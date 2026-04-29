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
  const [activeTab, setActiveTab] = useState<"rating" | "about">("rating");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const filtered = antiviruses
    .filter((av) => activeCategory === "Все" || av.os.includes(activeCategory))
    .sort((a, b) => b.rating - a.rating);

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

        {/* Tab switcher */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="flex gap-2 p-1 glass rounded-xl w-fit mx-auto mb-2">
            {[
              { key: "rating", label: "Рейтинг", icon: "Star" },
              { key: "about", label: "Что такое антивирус", icon: "BookOpen" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "rating" | "about")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-montserrat font-semibold transition-all duration-200 ${activeTab === tab.key ? "text-white shadow-lg" : "text-muted-foreground hover:text-foreground"}`}
                style={activeTab === tab.key ? { background: "linear-gradient(135deg, #a855f7, #22d3ee)" } : {}}
              >
                <Icon name={tab.icon} size={15} />
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Filters */}
        {activeTab === "rating" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
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
          </section>
        )}

        {/* Cards Grid */}
        {activeTab === "rating" && (<section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((av, idx) => {
              const isExpanded = expandedId === av.id;
              const isTop = idx === 0;
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

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>)}

        {/* About tab */}
        {activeTab === "about" && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 animate-slide-up">
            {/* What is antivirus */}
            <div className="rounded-2xl p-8 mb-6 glass" style={{ border: "1px solid rgba(168, 85, 247, 0.2)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #a855f7, #22d3ee)" }}>
                  <Icon name="Shield" size={18} className="text-white" />
                </div>
                <h2 className="font-montserrat font-black text-2xl gradient-text">Что такое антивирус?</h2>
              </div>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-4">
                Антивирус — это программа, которая защищает ваш компьютер, смартфон или планшет от вредоносного программного обеспечения: вирусов, троянов, шпионских программ, программ-вымогателей и других цифровых угроз.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-4">
                Современный антивирус работает сразу в нескольких направлениях: сканирует файлы при открытии, следит за поведением программ в реальном времени, блокирует опасные сайты и защищает личные данные при работе в интернете.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed">
                Без антивируса ваш компьютер похож на дом без замка — злоумышленники могут похитить пароли, банковские данные или зашифровать все файлы и потребовать выкуп.
              </p>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl p-8 glass" style={{ border: "1px solid rgba(34, 211, 238, 0.2)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7)" }}>
                  <Icon name="Clock" size={18} className="text-white" />
                </div>
                <h2 className="font-montserrat font-black text-2xl gradient-text">История антивирусов</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    year: "1971",
                    title: "Первый вирус — Creeper",
                    text: "Программист Боб Томас создал первый самовоспроизводящийся вирус Creeper для сети ARPANET — предшественника интернета. Вирус не причинял вреда, но выводил сообщение «I'm the creeper, catch me if you can!».",
                    color: "#a855f7",
                  },
                  {
                    year: "1972",
                    title: "Первый антивирус — Reaper",
                    text: "В ответ на Creeper появилась программа Reaper — первый в истории антивирус. Её единственной задачей было найти и удалить Creeper. Так началась вечная гонка между вирусами и защитой.",
                    color: "#22d3ee",
                  },
                  {
                    year: "1987",
                    title: "Рождение коммерческих антивирусов",
                    text: "Немецкая компания G Data выпустила первый коммерческий антивирус для персональных компьютеров. Вскоре появились Norton Antivirus и McAfee — имена, которые стали нарицательными.",
                    color: "#ec4899",
                  },
                  {
                    year: "1992",
                    title: "Эпидемия вируса Michelangelo",
                    text: "Вирус Michelangelo должен был уничтожить данные на миллионах ПК 6 марта 1992 года. Именно эта угроза сделала антивирусы массовым продуктом — продажи защитного ПО выросли в десятки раз.",
                    color: "#f97316",
                  },
                  {
                    year: "2000-е",
                    title: "Интернет-угрозы и облачная защита",
                    text: "С распространением интернета появились черви, трояны и фишинг. Антивирусы обзавелись сетевыми экранами, защитой почты и браузера. В конце 2000-х началась эра облачной защиты с базами угроз в реальном времени.",
                    color: "#10b981",
                  },
                  {
                    year: "2010-е",
                    title: "Вымогатели и искусственный интеллект",
                    text: "Программы-вымогатели (ransomware) стали главной угрозой — они шифруют все файлы и требуют выкуп. В ответ антивирусы начали использовать машинное обучение для обнаружения новых, неизвестных угроз по их поведению.",
                    color: "#8b5cf6",
                  },
                  {
                    year: "Сегодня",
                    title: "Комплексная кибербезопасность",
                    text: "Современный антивирус — это целая экосистема: защита от вирусов, VPN, менеджер паролей, защита веб-камеры, мониторинг утечек данных. Искусственный интеллект позволяет обнаруживать угрозы за секунды до того, как они успеют навредить.",
                    color: "#22d3ee",
                  },
                ].map((item) => (
                  <div key={item.year} className="flex gap-5">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-black text-xs text-white flex-shrink-0" style={{ background: `linear-gradient(135deg, ${item.color}88, ${item.color})` }}>
                        {item.year.length <= 4 ? item.year : "⬤"}
                      </div>
                      <div className="w-px flex-1 opacity-20" style={{ background: item.color }} />
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-montserrat font-black text-sm" style={{ color: item.color }}>{item.year}</span>
                      </div>
                      <h3 className="font-montserrat font-bold text-base text-foreground mb-1">{item.title}</h3>
                      <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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