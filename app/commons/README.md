<h1>Commons 3.0</h1>

---

<h2 style="color: green; padding-left: 20px">Clone repo</h2>
<div style="padding-left: 40px">
  <i>git clone --recurse-submodule<strong> http://stash.grupa.onet/scm/poc/commons-3.0.git</strong></i><br />
  <i>cd <strong>./commons-3.0</strong></i>
</div>

---

<h2 style="color: green; padding-left: 20px">Setup</h2>

<h3 style="color: green; padding-left: 40px">utils / configurePreact</h3>
<div style="padding-left: 50px;">
  In preact ver. 10.10.x drag and drop in calendar-3.0 stopped working. That file was made to fix that issue.
  
<a href="https://github.com/preactjs/preact/issues/3673">https://github.com/preactjs/preact/issues/3673</a>
</div>

<h3 style="color: green; padding-left: 40px">Store</h3>
<p style="padding-left: 50px;">
  Commons require `initRedux` file in `app` directory, it must export a `redcuers` object and a `middlewares` array.
  It also should export `RootState` and `TypedDispatch` types.
  Reducers from commons (like `userConfigReducer`) **are not** imported by default, each application must add commons' reducers to `reducers` object.
</p>
<p style="padding-left: 50px;">Example:</p>
<div style="padding-left: 50px;">

```ts
import { KEY as REDUCER_USER_CONFIG_KEY } from 'commons/hooks/useUserConfig/constants';
import { REDUCER_EVENTS } from 'utils/constants';

import userConfigReducer from 'commons/hooks/useUserConfig/reducer';
import eventsReducer from 'components/Event/reducer';

import newContactValidationMiddlewares from 'components/NewContact/middlewares';

import { ThunkDispatch } from 'redux-thunk';
import { UnknownAction } from 'redux';

export const reducers = {
  [REDUCER_USER_CONFIG_KEY]: userConfigReducer,
  [REDUCER_EVENTS]: eventsReducer,
} as const;

export const middlewares = [...newContactValidationMiddlewares];

export type RootState = {
  [key in keyof typeof reducers]: NonNullable<
    Parameters<(typeof reducers)[key]>[0]
  >
};

export type TypedDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
```

</div>

---

<h3 style="color: green; padding-left: 40px">useTranslations</h3>
<p style="padding-left: 50px;">
  `t` function requires `translations.d.ts` file to work properly.
  This file contains information about your project specific translations, which `t` uses to strictly type its arguments.
  It also causes a compilation error if translation key is mistyped etc.
  `translations.d.ts` can be placed in any directory you want, as long as it's visible to typescript.
<p>
<p style="padding-left: 50px;">It can be configured like this:</p>
<div style="padding-left: 50px;">

```ts
import pl from 'path/to/yourMainLanguageTranslations';

declare module 'commons/translations/types' {
  import {
    TranslationKeyWithCommons,
    TranslationsWithCommons,
  } from 'commons/translations/types';

  /**
   * All translation keys are determined by `PL` translations.
   */
  export type TranslationKey = TranslationKeyWithCommons<keyof typeof pl>;
  //                   here you can put any string union, ^^^^^^^^^^^^^^^^^
  //                   example: 'key1' | 'key2'...
  /**
   * Translations object type is based on PL translations.
   * It only accepts keys that are defined in pl.ts.
   * This prevents typos in translation files.
   */
  export type Translations = TranslationsWithCommons<typeof pl>;
  //    here you can put any object with translations ^^^^^^^^^^^
  //    example: { key1: 'Translation 1', key2: 'Translation 2' }
}
```

</div>

<p style="padding-left: 50px;">
  You can add your own translations by calling `initTranslations` function. It takes one argument, a languages object.
  Note that `pl` translations will be used to check typings, but this can be changed in TS configuration shown above, just replace `pl` with any other language for example `en`. 
</p>
<p style="padding-left: 50px;">Example:</p>
<div style="padding-left: 50px;">

```ts
const langs = {
  pl: {
    title: 'Tytuł',
    greeting: ({ name }: { name: string }) => `Witaj ${name}`,
  },
  en: {
    title: 'Title',
    greeting: ({ name }: { name: string }) => `Hello ${name}`,
  },
};

initTranslations(langs);
```

</div>

---

<h3 style="color: green; padding-left: 40px">&lt;SidePanel /&gt;</h3>
<div style="padding-left: 50px;">

1. Make sure to add `<div id="side-panels" class="app-side-panels"></div>` into `index.html:`

```html
...
<div id="app" class="app-container"></div>
<div id="side-panels" class="app-side-panels"></div>
<div id="modals" class="app-modals"></div>
...
```

2. Add side panel reducer to `initRedux.ts`

```ts
import sidePanelReducer from 'commons/SidePanel/reducer';
import { KEY as REDUCER_SIDE_PANELS_KEY } from 'commons/SidePanel/constants';

export const reducers = {
    ...,
    [REDUCER_SIDE_PANELS_KEY]: sidePanelReducer,
};
```

3. Create `SidePanels` directory inside `app/components` and create `AttachmentItem.tsx` with your SidePanels:

```tsx
import { YourSidePanel } from './YourSidePanel';

const SidePanels = () => <YourSidePanel />;

export default SidePanels;
```

</div>

---

<h3 style="color: green; padding-left: 40px">&lt;WeatherWidget /&gt;</h3>
<div style="padding-left: 50px;">

1. Call `useFetchWeather()` inside `containers/app/Hooks`
2. Place `<WeatherWidget />` in desired location

</div>

---

