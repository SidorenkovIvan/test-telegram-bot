import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { ITelegramUser, IWebApp } from '../types/types';

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});
const mainRoutes = ['/', '/payments', 'profile', '/my-orders', '/account'];

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const router = useRouter();

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      app.ready();
      app.isClosingConfirmationEnabled = true;
      app.onEvent('backButtonClicked', function () {
        router.back();
      });
      setWebApp(app);
    }
  }, []);

  useEffect(() => {
    const validRoute = mainRoutes.find(url => url === router.route);

    if (!validRoute && webApp) {
      webApp.BackButton.show();
    } else if (validRoute && webApp) {
      webApp.BackButton.hide();
    }
  }, [router.route]);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        user: webApp.initDataUnsafe.user,
        initData: webApp.initData,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
