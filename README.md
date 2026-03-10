# Night Hunger: Vampire Evo

Проект находится в recovery-фазе (Stage 4 partial, 10 марта 2026).

## Актуальный статус

- Рабочий baseline: Telegram bot + восстановленные экраны WebApp.
- Web frontend работает в split-режиме:
  - core API (`auth/user/game/upgrade/inventory/shop`) -> live backend MVP
  - extended API (`leaderboard/referral`) -> mock
- `services/api` собирается с включенными модулями:
  - `auth`, `user`, `game`, `upgrade`, `inventory`, `shop`
- Подтверждён локальный smoke для:
  - `auth -> hunt -> action -> state`
  - `upgrade -> inventory -> shop` (JWT smoke)
- Расширенные backend-модули (`leaderboard`, `referral`, `payment`, `notification`) временно отключены до следующей интеграции.
- Локальный аварийный запуск бота: `run-bot-only.bat`.
- Production запуск: `docker-compose -f docker/docker-compose.prod.yml up -d --build` (включает сервис `bot` с автоперезапуском).

Подробный статус и диагностические команды: `STATUS.md`.

## Быстрый локальный запуск (fallback)

1. Скопируй `.env.example` в `.env`.
2. Заполни минимум:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_WEBAPP_URL`
3. Запусти:

```bat
run-bot-only.bat
```

4. В Telegram отправь `/start` и нажми `🎮 Играть`.

## Production (Always-On Bot)

```bash
docker-compose -f docker/docker-compose.prod.yml up -d --build
docker-compose -f docker/docker-compose.prod.yml ps
docker-compose -f docker/docker-compose.prod.yml logs -f bot
```

## Документация

- `STATUS.md` — что работает, что сломано, где логи.
- `BOT_ONLY.md` — минимальный запуск bot-only.
- `DEVELOPMENT_PLAN.md` — recovery-план по этапам.

## Архив

Устаревшие инструкции запуска перенесены в:

- `docs/archive/2026-03-stage0/HOW_TO_RUN.md`
- `docs/archive/2026-03-stage0/RUN_WITHOUT_TELEGRAM.md`
