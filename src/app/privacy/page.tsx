import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — AniMax",
  description:
    "Как приложение AniMax обрабатывает и защищает данные пользователей: какие сведения собираются, зачем они нужны и какие права есть у пользователя.",
};

const sections = [
  {
    title: "1. Общие положения",
    paragraphs: [
      "Настоящая политика описывает, какие данные обрабатывает мобильное приложение AniMax для Android, зачем они нужны и как защищаются. Те же правила действуют и для этого сайта.",
      "Используя приложение или сайт, вы соглашаетесь с условиями этой политики. Если вы не согласны с ними, пожалуйста, прекратите использование приложения и сайта.",
    ],
  },
  {
    title: "2. Какие данные мы обрабатываем",
    paragraphs: [
      "Данные, которые вы указываете сами: список избранного, история просмотра и настройки приложения. Эти сведения хранятся на вашем устройстве.",
      "Данные, которые передаются автоматически: техническая информация об устройстве и версии приложения, сведения об ошибках и обезличенная статистика использования. Эти данные не позволяют напрямую идентифицировать вас.",
    ],
  },
  {
    title: "3. Зачем нужны данные",
    paragraphs: [
      "Чтобы приложение работало корректно: показывало каталог, сохраняло прогресс просмотра и напоминало о новых сериях.",
      "Чтобы находить и исправлять ошибки, а также понимать, какие функции востребованы, и делать приложение удобнее.",
    ],
  },
  {
    title: "4. Реклама и сторонние сервисы",
    paragraphs: [
      "В приложении и на сайте может показываться реклама, в том числе через рекламные сети. Рекламные партнёры могут использовать обезличенные идентификаторы устройства и файлы cookie, чтобы подбирать и измерять показы рекламы.",
      "Список авторизованных продавцов рекламы, работающих с нашим приложением, опубликован в файле app-ads.txt в корне этого сайта.",
    ],
  },
  {
    title: "5. Передача данных третьим лицам",
    paragraphs: [
      "Мы не продаём и не передаём ваши персональные данные третьим лицам, кроме случаев, предусмотренных законом, а также обезличенной технической и статистической информации, необходимой для работы рекламных и аналитических сервисов.",
    ],
  },
  {
    title: "6. Хранение и защита",
    paragraphs: [
      "Пользовательские настройки и история просмотра хранятся на устройстве и удаляются вместе с приложением. Для защиты передаваемых данных применяются стандартные технические меры, включая шифрование канала связи (HTTPS).",
    ],
  },
  {
    title: "7. Дети",
    paragraphs: [
      "Приложение не предназначено для целенаправленного сбора данных детей. Если вы считаете, что данные ребёнка попали к нам, свяжитесь с нами — мы удалим их.",
    ],
  },
  {
    title: "8. Ваши права",
    paragraphs: [
      "Вы можете в любой момент удалить историю просмотра и избранное в настройках приложения, очистить данные приложения средствами Android или удалить приложение целиком.",
    ],
  },
  {
    title: "9. Изменения политики",
    paragraphs: [
      "Политика может обновляться. Актуальная версия всегда доступна на этой странице, поэтому рекомендуем периодически её просматривать.",
    ],
  },
  {
    title: "10. Контакты",
    paragraphs: [
      "По вопросам обработки данных напишите нам через форму обратной связи на странице приложения AniMax в RuStore.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-lg font-bold tracking-tight">AniMax</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Приложение AniMax для Android и этот сайт
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 px-4 py-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <span>© 2026 AniMax</span>
          <Link href="/" className="transition-colors hover:text-foreground">
            Главная
          </Link>
        </div>
      </footer>
    </div>
  );
}
