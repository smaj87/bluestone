import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { GoogleTagPubadsReturnInterface } from 'commons/types/ads';

import {
  ON_DESTROY_EVENT,
  ON_EMPTY_EVENT,
  ON_RENDER_EVENT,
  SLOT_BUCKET_NAME,
  SLOT_FOLDER_LIST_ID,
  SLOT_FOLDER_LIST_NAME,
  SLOT_RIGHT_ID,
  SLOT_RIGHT_NAME,
  SLOT_TOP_ID,
  SLOT_TOP_MOBILE_ID,
  SLOT_TOP_MOBILE_NAME,
  SLOT_TOP_NAME,
} from './constants';

const qp = (e: string) => {
  const a = new RegExp(`[\\?&]${e}=([^&#]*)`).exec(window.location.href);

  return a !== null ? a[1] : null;
};

const setPubadsTargeting = () => {
  const kw = qp('dfp_target_kw');
  const yt = new Date();
  const ybTm = yt.getUTCMinutes();
  let ybTh = yt.getUTCHours() - 8;
  let ybWd = yt.getUTCDay();

  if (ybTh < 0) {
    ybTh = 24 + ybTh;
    ybWd -= 1;
  }

  if (ybWd < 0) {
    ybWd = 7 + ybWd;
  }

  window.googletag
    .pubads()
    .setTargeting('dx', ['108972'])
    .setTargeting('domena', ['poczta.gazeta.pl'])
    .setTargeting('jsp', ['30'])
    .setTargeting('dir', ['googleAuth'])
    .setTargeting('adblock', ['false'])
    .setTargeting('cb', [`${window?.AG?.rodoAccepted}`])
    .setTargeting('yb_th', ybTh.toString())
    .setTargeting('yb_tm', ybTm.toString())
    .setTargeting('yb_wd', ybWd.toString());

  if (kw) {
    window.googletag.pubads().setTargeting('kw', kw);
  }
};

const setSlotsTargeting = () => {
  const YB = {
    ab: () => (YB.dool ? 'b' : `a${Math.floor(Math.random() * 10)}`),
    dc: () => (YB.dool ? 'd' : `c${Math.floor(Math.random() * 20)}`),
    mx: () => (!YB.dool ? 'x' : `m${Math.floor(Math.random() * 180)}`),
    tt: () => `tt${Math.floor(Math.random() * 10)}`,
    dool: Math.random() >= 0.1,
  };

  window.googletag
    .pubads()
    .getSlots()
    .forEach((slot: any) => {
      slot
        .setTargeting('yb_ab', YB.ab())
        .setTargeting('yb_dc', YB.dc())
        .setTargeting('yb_mx', YB.mx())
        .setTargeting('yb_tt', YB.tt())
        .setTargeting('yb_ff', `${Math.round(Math.random())}`);
    });
};

export const init = () => {
  if (window.googletag) {
    window.googletag.cmd.push(() => {
      setPubadsTargeting();

      if (window?.AG?.rodoAccepted === -1 || window?.AG?.rodoAccepted === 0) {
        window.googletag.pubads().setRequestNonPersonalizedAds(1);
      }

      setSlotsTargeting();

      window.googletag.pubads().enableSingleRequest();
      window.googletag.pubads().collapseEmptyDivs();

      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', (e: any) => {
          const container = document.getElementById(
            e.slot?.getSlotId?.()?.getDomId?.(),
          );

          if (container) {
            if (e.isEmpty) {
              container.dispatchEvent(new Event(ON_EMPTY_EVENT));
            } else {
              container.dispatchEvent(new Event(ON_RENDER_EVENT));
            }
          }
        });

      window.googletag.enableServices();
    });
  }
};

export const gemiusHit = () => {
  window.gemius_hit?.(window.pp_gemius_hit_identificator);
};

export const refresh = () => {
  if (window.googletag?.pubads) {
    window.googletag.cmd.push(() => {
      window.googletag.pubads().refresh();
    });
  }
};

export const destroy = () => {
  if (window.googletag) {
    window.googletag.cmd.push(() => {
      window.googletag.destroySlots();
      document.dispatchEvent(new Event(ON_DESTROY_EVENT));
    });
  }
};

const fetchedSlots: Record<string, GoogleTagPubadsReturnInterface> = {};

export const destroyById = (slotId: string) => {
  if (window.googletag) {
    window.googletag.cmd.push(() => {
      if (fetchedSlots[slotId]) {
        window.googletag.destroySlots([fetchedSlots[slotId]]);
      }
    });
  }
};

export const fetchBy = (slotId: string, slotName: string) => {
  if (window.googletag) {
    window.googletag.cmd.push(() => {
      if (fetchedSlots[slotId]) {
        window.googletag.destroySlots([fetchedSlots[slotId]]);
      }

      fetchedSlots[slotId] = window.googletag.defineSlot(
        `${SLOT_BUCKET_NAME}${slotName}`,
        ['fluid'],
        slotId,
      );

      fetchedSlots[slotId].setTargeting('pos', [slotName]);
      fetchedSlots[slotId].addService(window.googletag.pubads());

      window.googletag.display(slotId);
    });
  }
};

export const fetch = () => {
  if (window.googletag) {
    window.googletag.cmd.push(() => {
      window.googletag.destroySlots();
      document.dispatchEvent(new Event(ON_DESTROY_EVENT));

      const isMobile = getIsMobile();

      if (isMobile) {
        window.googletag
          .defineSlot(
            `${SLOT_BUCKET_NAME}${SLOT_TOP_MOBILE_NAME}`,
            [
              [300, 250],
              [300, 150],
              [300, 100],
              [300, 50],
              [320, 100],
              [320, 50],
              'fluid',
            ],
            SLOT_TOP_MOBILE_ID,
          )
          .setTargeting('pos', [SLOT_TOP_MOBILE_NAME])
          .addService(window.googletag.pubads());

        window.googletag.display(SLOT_TOP_MOBILE_ID);
      } else {
        window.googletag
          .defineSlot(
            `${SLOT_BUCKET_NAME}${SLOT_TOP_NAME}`,
            [
              [750, 100],
              [728, 90],
              [750, 200],
              [940, 300],
              [970, 250],
              [750, 300],
              [1170, 300],
              'fluid',
            ],
            SLOT_TOP_ID,
          )
          .setTargeting('pos', [SLOT_TOP_NAME])
          .addService(window.googletag.pubads());

        // slot right
        window.googletag
          .defineSlot(
            `${SLOT_BUCKET_NAME}${SLOT_RIGHT_NAME}`,
            [
              [160, 600],
              [160, 650],
              [300, 600],
              [120, 600],
              [300, 650],
              [120, 650],
              [300, 250],
              'fluid',
            ],
            SLOT_RIGHT_ID,
          )
          .setTargeting('pos', [SLOT_RIGHT_NAME])
          .addService(window.googletag.pubads());

        // slot folder list
        window.googletag
          .defineSlot(
            `${SLOT_BUCKET_NAME}${SLOT_FOLDER_LIST_NAME}`,
            [[200, 200], [202, 202], [216, 216], 'fluid'],
            SLOT_FOLDER_LIST_ID,
          )
          .setTargeting('pos', [SLOT_FOLDER_LIST_NAME])
          .addService(window.googletag.pubads());

        window.googletag.display(SLOT_TOP_ID);
        // window.googletag.display(SLOT_RIGHT_ID); // niepotrzebne przy SRA
        // window.googletag.display(SLOT_FOLDER_LIST_ID); // niepotrzebne przy SRA
      }
    });
  }
};
