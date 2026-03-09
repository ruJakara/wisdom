# QUICKSTART

Актуальный quickstart для текущего состояния проекта:

1. Скопировать `.env.example` в `.env`.
2. Заполнить `TELEGRAM_BOT_TOKEN` и `TELEGRAM_WEBAPP_URL`.
3. Запустить `run-bot-only.bat`.
4. В Telegram открыть бота, выполнить `/start`, нажать `🎮 Играть`.

Детали и диагностика: `STATUS.md`.

Для фронтенд-разработки:

1. Stage 1 (полный mock):
   - `VITE_USE_MOCK_API=true`
2. Stage 3 (интеграция MVP):
   - `VITE_USE_MOCK_API=false`
   - `VITE_USE_MOCK_CORE_API=false`
   - `VITE_USE_MOCK_EXTENDED_API=true`
3. Запустить `npm run dev --prefix apps/web`.

Для backend MVP (Stage 2):

1. Проверить сборку: `npm run build --prefix services/api`.
2. Активные модули в текущем контуре: `auth`, `user`, `game`.
3. Базовый цикл (`auth -> hunt -> action -> state`) подтверждён локально на 2026-03-09.
