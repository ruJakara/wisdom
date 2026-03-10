import asyncio
import logging
import os
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from handlers import router
from notifications import init_notification_service

logging.basicConfig(level=logging.INFO)
RESTART_DELAY_SECONDS = 5


def build_dispatcher() -> Dispatcher:
    dp = Dispatcher()
    dp.include_router(router)
    return dp

async def main():
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not bot_token or bot_token == "your_bot_token_here":
        raise RuntimeError("Set TELEGRAM_BOT_TOKEN before starting the bot.")

    # Инициализация бота
    bot = Bot(
        token=bot_token,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML)
    )

    # Если на боте раньше стоял webhook, polling не будет получать апдейты.
    await bot.delete_webhook(drop_pending_updates=True)

    # Инициализация сервиса уведомлений
    init_notification_service(bot)

    # Установка команд меню
    from aiogram.types import BotCommand
    commands = [
        BotCommand(command="start", description="Начать игру"),
        BotCommand(command="hunt", description="Начать охоту"),
        BotCommand(command="profile", description="Мой профиль"),
        BotCommand(command="leaderboard", description="Таблица лидеров"),
        BotCommand(command="referral", description="Рефералы"),
        BotCommand(command="help", description="Помощь"),
    ]

    while True:
        try:
            await bot.set_my_commands(commands)
            dp = build_dispatcher()
            logging.info("Bot started successfully!")
            await dp.start_polling(
                bot,
                allowed_updates=dp.resolve_used_update_types(),
            )
            break
        except asyncio.CancelledError:
            raise
        except Exception:
            logging.exception(
                "Polling stopped unexpectedly. Restarting in %s seconds...",
                RESTART_DELAY_SECONDS,
            )
            await asyncio.sleep(RESTART_DELAY_SECONDS)
    await bot.session.close()

if __name__ == "__main__":
    asyncio.run(main())
