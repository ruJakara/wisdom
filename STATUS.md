# STATUS

Обновлено: 2026-03-10

## Текущее состояние (Stage 3 in progress)

- Рабочая конфигурация: `bot-only` + восстановленные экраны WebApp (Stage 1) + начатая Stage 3 интеграция.
- Backend `services/api` (MVP core) собирается после стабилизации этапа 2.
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
- Фронтенд переведён на split-режим API:
  - core (`auth/user/game`) -> live backend MVP (`VITE_USE_MOCK_CORE_API=false`)
  - extended (`upgrade/inventory/shop/leaderboard/referral`) -> mock (`VITE_USE_MOCK_EXTENDED_API=true`)
- `services/api` собирается:
  - `npm run build --prefix services/api` -> OK (проверено 2026-03-09).
- В backend оставлен минимальный контур модулей:
  - `auth`
  - `user`
  - `game`
- Проверен базовый runtime-цикл backend MVP:
  - `auth -> game/hunt -> game/action -> game/state` -> OK (проверено 2026-03-09, локальный smoke).
- Бот-код проходит синтаксическую проверку:
  - `python -m compileall apps\bot\src` -> OK (проверено 2026-03-09).

## Что сломано

- Полный backend-контур для расширенных экранов пока не подключён:
  - `upgrade`, `inventory`, `shop`, `leaderboard`, `referral` продолжают идти через mock.
- Временное ограничение этапа 2:
  - второстепенные backend-модули (`payment`, `notification`, `referral`, `shop`, `inventory`, `upgrade`, `leaderboard`) отключены из основного контура до этапа 3-4.

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
