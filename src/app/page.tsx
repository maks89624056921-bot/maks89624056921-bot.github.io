import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/paths";
import {
  BellRing,
  Bookmark,
  Clapperboard,
  Download,
  History,
  Search,
  Zap,
} from "lucide-react";

const RUSTORE_URL = "https://www.rustore.ru/catalog/app/com.animax.app";

const features = [
  {
    icon: Clapperboard,
    title: "Огромный каталог",
    text: "Тысячи аниме-сериалов и фильмов — от классики до текущих сезонов.",
  },
  {
    icon: Search,
    title: "Умный поиск",
    text: "Найдите тайтл по названию, жанру или году выхода за пару секунд.",
  },
  {
    icon: BellRing,
    title: "Новые серии",
    text: "Уведомим, когда выйдет следующая серия вашего любимого тайтла.",
  },
  {
    icon: Bookmark,
    title: "Избранное",
    text: "Сохраняйте аниме в закладки и возвращайтесь к просмотру в один тап.",
  },
  {
    icon: History,
    title: "Продолжить просмотр",
    text: "Плеер запоминает, где вы остановились, и продолжает с этого момента.",
  },
  {
    icon: Zap,
    title: "Быстрый и лёгкий",
    text: "Приложение работает плавно даже на недорогих смартфонах.",
  },
];

const screenshots = [
  { src: "/app-screen-1.png", alt: "Скриншот приложения AniMax — главный экран" },
  { src: "/app-screen-2.png", alt: "Скриншот приложения AniMax — экран 2" },
  { src: "/app-screen-3.png", alt: "Скриншот приложения AniMax — экран 3" },
  { src: "/app-screen-4.png", alt: "Скриншот приложения AniMax — экран 4" },
  { src: "/app-screen-5.png", alt: "Скриншот приложения AniMax — экран 5" },
  { src: "/app-screen-6.png", alt: "Скриншот приложения AniMax — экран 6" },
];

const steps = [
  {
    title: "Откройте RuStore",
    text: "На смартфоне с Android откройте магазин приложений RuStore.",
  },
  {
    title: "Найдите AniMax",
    text: "Введите в поиске «AniMax» и перейдите на страницу приложения.",
  },
  {
    title: "Нажмите «Установить»",
    text: "Через минуту иконка AniMax появится на вашем экране.",
  },
];

export default function IndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src={asset("/animax-app-icon.png")}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight">AniMax</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Возможности
            </a>
            <a href="#screens" className="transition-colors hover:text-foreground">
              Скриншоты
            </a>
            <a href="#install" className="transition-colors hover:text-foreground">
              Установка
            </a>
          </nav>
          <a
            href={RUSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Скачать
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-4 pb-20 pt-16 sm:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                <Zap className="h-3.5 w-3.5" />
                Приложение для Android
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Всё аниме,{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  которое вы любите
                </span>
                , в одном приложении
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
                AniMax — удобный каталог аниме для Android: тысячи тайтлов,
                свежие серии, избранное и плеер, который помнит, где вы
                остановились.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
                <a
                  href={RUSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition-opacity hover:opacity-90"
                >
                  <Download className="h-5 w-5" />
                  Скачать в RuStore
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-white/30"
                >
                  Узнать больше
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-600/40 to-fuchsia-600/40 blur-3xl"
                />
                <div className="relative aspect-[9/16] w-64 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:w-72">
                  <Image
                    src={asset("/app-screen-6.png")}
                    alt="Экран приложения AniMax на смартфоне"
                    fill
                    sizes="(min-width: 640px) 320px, 256px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 px-4 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Создано для аниме-фанатов
              </h2>
              <p className="mt-4 text-muted-foreground">
                Всё, что нужно для комфортного просмотра, — в одном приложении.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-500/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section id="screens" className="scroll-mt-20 px-4 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Взгляд внутрь приложения
              </h2>
              <p className="mt-4 text-muted-foreground">
                Аккуратный тёмный интерфейс, в котором ничего не отвлекает от
                просмотра.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {screenshots.map((shot) => (
                <Image
                  key={shot.src}
                  src={asset(shot.src)}
                  alt={shot.alt}
                  width={720}
                  height={1280}
                  className="h-auto w-full rounded-3xl border border-white/10 object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="relative scroll-mt-20 px-4 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Установка за минуту
              </h2>
              <p className="mt-4 text-muted-foreground">
                Три простых шага — и AniMax у вас в кармане.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-bold text-white">
                    Шаг {index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={RUSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition-opacity hover:opacity-90"
              >
                <Download className="h-5 w-5" />
                Скачать AniMax в RuStore
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <span>© 2026 AniMax</span>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Политика конфиденциальности
          </Link>
          <a
            href={RUSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            AniMax в RuStore
          </a>
        </div>
      </footer>
    </div>
  );
}
