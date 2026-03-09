# Night Hunger: Vampire Evo

Проект находится в recovery-фазе (Stage 1, 9 марта 2026).

## Актуальный статус

- Рабочий baseline: Telegram bot + восстановленные экраны WebApp.
- Web frontend работает с временными mock API (`VITE_USE_MOCK_API=true`).
- Нерабочий контур: `services/api` (сборка падает, много TypeScript ошибок).
- Рекомендованный запуск бота: `run-bot-only.bat`.

Подробный статус и диагностические команды: `STATUS.md`.

## Быстрый запуск (единственный актуальный путь)

1. Скопируй `.env.example` в `.env`.
2. Заполни минимум:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_WEBAPP_URL`
3. Запусти:

```bat
run-bot-only.bat
```

4. В Telegram отправь `/start` и нажми `🎮 Играть`.

## Документация

- `STATUS.md` — что работает, что сломано, где логи.
- `BOT_ONLY.md` — минимальный запуск bot-only.
- `DEVELOPMENT_PLAN.md` — recovery-план по этапам.

## Архив

Устаревшие инструкции запуска перенесены в:

- `docs/archive/2026-03-stage0/HOW_TO_RUN.md`
- `docs/archive/2026-03-stage0/RUN_WITHOUT_TELEGRAM.md`
