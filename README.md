# AniMax — сайт приложения

**Опубликован:** https://maks89624056921-bot.github.io/
**Файл для рекламных сетей:** https://maks89624056921-bot.github.io/app-ads.txt

Одностраничный сайт Android-приложения AniMax: лендинг, скриншоты, страница
политики конфиденциальности и файл `app-ads.txt` для рекламных сетей.

Репозиторий: https://github.com/maks89624056921-bot/maks89624056921-bot.github.io

Сделано на Next.js (App Router) со статическим экспортом: сборка складывает
готовый сайт в папку `out/`, которую можно положить на любой статический
хостинг (GitHub Pages, Netlify, Cloudflare Pages и т. п.).

## Локальный запуск

```bash
bun install
bun run dev      # http://localhost:3000
bun run check    # lint + типы + сборка
bun run build    # статический экспорт в out/
```

Проверить собранный сайт локально:

```bash
bunx serve out
```

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub и запушьте код (см. команды в конце).
2. В репозитории откройте **Settings → Pages** и в разделе **Build and
   deployment → Source** выберите **GitHub Actions**.
3. Запушьте изменения в ветку `main`. Workflow
   `.github/workflows/deploy.yml` сам соберёт сайт и опубликует его.
4. Через 1–2 минуты сайт будет доступен по адресу
   `https://<логин>.github.io/<репозиторий>/` (точный адрес показан в
   **Actions → Deploy to GitHub Pages**).

### Важно для `app-ads.txt`

Яндекс и другие рекламные сети ищут файл строго по адресу
`https://ваш-домен/app-ads.txt`, то есть **в корне домена**. У обычного
project-репозитория адрес получается `https://<логин>.github.io/<репозиторий>/app-ads.txt`
— это не корень домена, и проверка не пройдёт.

Поэтому выберите один из вариантов:

- **Репозиторий `<логин>.github.io`** (например, `maxim.github.io`). Тогда сайт
  открывается с корня домена и файл доступен по адресу
  `https://<логин>.github.io/app-ads.txt`. Ничего дополнительно настраивать не
  нужно — workflow сам определит, что префикс пути не требуется.
- **Свой домен.** В **Settings → Pages → Custom domain** укажите домен,
  добавьте CNAME-запись у регистратора и включите **Enforce HTTPS**. Затем в
  **Settings → Secrets and variables → Actions → Variables** создайте
  переменную `NEXT_PUBLIC_SITE_URL` со значением `https://ваш-домен` (нужна для
  canonical-ссылок и превью в соцсетях). Файл будет доступен по адресу
  `https://ваш-домен/app-ads.txt`.

Содержимое `app-ads.txt` лежит в `public/app-ads.txt` и попадает в корень
собранного сайта автоматически.

### Обновление файла и текстов сайта

| Что меняем | Где |
| --- | --- |
| Список рекламных продавцов | `public/app-ads.txt` |
| Заголовок и описание сайта | `src/app/site.json` |
| Тексты лендинга | `src/app/page.tsx` |
| Политика конфиденциальности | `src/app/privacy/page.tsx` |
| Иконка сайта | `src/app/icon.png` |
| Картинки и скриншоты | `public/` |
| robots.txt и карта сайта | `src/app/robots.ts`, `src/app/sitemap.ts` |

После правок достаточно сделать коммит и запушить — сайт пересоберётся сам.

### Подтверждение домена в Яндексе

Если Яндекс.Вебмастер или РСЯ просит подтвердить владение сайтом, положите
выданный файл (например, `yandex_1234567890.html`) в папку `public/` и
запушьте: он будет доступен с корня сайта.

## Структура проекта

```
public/                 статические файлы: картинки, app-ads.txt, robots.txt
src/app/layout.tsx      общий каркас, метаданные
src/app/page.tsx        лендинг
src/app/privacy/        политика конфиденциальности
src/app/site.json       заголовок и описание
.github/workflows/      автопубликация на GitHub Pages
```

## Первый пуш в новый репозиторий

```bash
git init
git add .
git commit -m "AniMax site"
git branch -M main
git remote add origin https://github.com/<логин>/<репозиторий>.git
git push -u origin main
```
