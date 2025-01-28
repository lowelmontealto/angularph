import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,
    withInMemoryScrolling(
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    },
  ),withRouterConfig({
    onSameUrlNavigation: 'reload',
  }),
  ), provideClientHydration()]
};
