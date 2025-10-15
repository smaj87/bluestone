import { InterfaceDlApi, InterfaceEffectInterface } from './types';

export const watchViewability = (
  container: HTMLElement | null,
  adserverMeta: InterfaceEffectInterface['params']['adserver_meta'],
  viewability: string,
): Promise<void> =>
  new Promise((resolve) => {
    if (
      viewability &&
      container &&
      window.onetAds &&
      adserverMeta?.viewability
    ) {
      window.onetAds.cmd.push((dlApi: InterfaceDlApi) => {
        dlApi
          .watchVisibility({
            el: container,
            slot: {
              ads: [{ meta: adserverMeta }],
            },
          })
          .on('viewed', async () => {
            await fetch(viewability, {
              credentials: 'include',
            });
          });
      });
    }

    resolve();
  });
