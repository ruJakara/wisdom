import { useMemo } from 'react';

type TelegramWebAppUser = {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

type TelegramWebApp = {
  initDataUnsafe?: {
    user?: TelegramWebAppUser;
  };
  platform?: string;
  version?: string;
  expand?: () => void;
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

function App() {
  const tg = window.Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user;

  const userDisplay = useMemo(() => {
    if (!user) return 'guest';
    if (user.username) return `@${user.username}`;
    return [user.first_name, user.last_name].filter(Boolean).join(' ') || String(user.id ?? 'guest');
  }, [user]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Night Hunger: Vampire Evo</h1>
        <p className="mt-3 text-slate-300">
          WebApp открыт корректно. Это временный стабильный экран для проверки деплоя и запуска из Telegram.
        </p>

        <div className="mt-6 grid gap-3 text-sm">
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <span className="text-slate-400">User:</span> <span className="font-mono">{userDisplay}</span>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <span className="text-slate-400">Platform:</span>{' '}
            <span className="font-mono">{tg?.platform || 'unknown'}</span>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <span className="text-slate-400">Telegram WebApp:</span>{' '}
            <span className="font-mono">{tg ? `connected (v${tg.version || 'n/a'})` : 'not detected'}</span>
          </div>
        </div>

        <button
          className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500"
          onClick={() => tg?.expand?.()}
          type="button"
        >
          Expand WebApp
        </button>
      </div>
    </main>
  );
}

export default App;
