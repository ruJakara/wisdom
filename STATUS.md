# STATUS

Обновлено: 2026-03-09

## Текущее состояние (Stage 1 baseline)

- Рабочая конфигурация: `bot-only` + восстановленные экраны WebApp (Stage 1) с mock API.
- Backend `services/api` сейчас нестабилен и не собирается.
- Единый рекомендуемый путь локального запуска: `run-bot-only.bat`.

## Что работает

- Бот содержит обработчик `/start` и кнопку `🎮 Играть`:
  - `apps/bot/src/handlers/commands.py`
  - `apps/bot/src/keyboards/keyboards.py`
- WebApp открывается только при валидном `TELEGRAM_WEBAPP_URL` (`http/https`, не placeholder-домен).
- `apps/web` собирается:
  - `npm run build --prefix apps/web` -> OK (проверено 2026-03-09).
- Восстановлен роутинг экранов:
  - `Hub/Hunt/Upgrade/Inventory/Shop/Leaderboard/Referral`.
- Для фронта включён временный mock API режим:
  - `VITE_USE_MOCK_API=true` в `.env`.
- Бот-код проходит синтаксическую проверку:
  - `python -m compileall apps\bot\src` -> OK (проверено 2026-03-09).

## Что сломано

- `services/api` не собирается:
  - `npm run build --prefix services/api` -> FAIL (88 TypeScript ошибок, проверено 2026-03-09).
- Реальный backend-контур для фронта пока не подключён:
  - frontend работает через mock-ответы до стабилизации `services/api`.

## Где смотреть логи

- Бот runtime:
  - окно терминала, в котором запущен `run-bot-only.bat`.
- Временные файлы pip при запуске батника:
  - `apps/bot/.tmp`.
- Проверка сборок:
  - запустить в корне проекта:
    - `npm run build --prefix apps/web`
    - `npm run build --prefix services/api`

## Актуальный путь запуска

1. Скопировать `.env.example` в `.env`.
2. Заполнить минимум:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_WEBAPP_URL`
3. Запустить `run-bot-only.bat`.
4. В Telegram открыть бота, отправить `/start`, нажать `🎮 Играть`.

## Архив устаревших инструкций

- `docs/archive/2026-03-stage0/HOW_TO_RUN.md`
- `docs/archive/2026-03-stage0/RUN_WITHOUT_TELEGRAM.md`
