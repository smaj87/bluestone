export const ON_DESTROY_EVENT = 'GPT_GAZETA/ON_DESTROY_EVENT';
export const ON_RENDER_EVENT = 'GPT_GAZETA/ON_RENDER_EVENT';
export const ON_EMPTY_EVENT = 'GPT_GAZETA/ON_EMPTY_EVENT';

export const SLOT_BUCKET_NAME = '/75224259/AGORA-IN/POCZTA/webmail/';

export const SLOT_TOP_NAME = '001-TOPBOARD';
export const SLOT_TOP_MOBILE_NAME = '101-TOPBOARD-MOBI';
export const SLOT_TOP_ID = 'slot_001_TOPBOARD';
export const SLOT_TOP_MOBILE_ID = 'slot_101_TOPBOARD_MOBI';

export const SLOT_RIGHT_NAME = '003-RECTANGLE';
export const SLOT_RIGHT_ID = 'slot_003_RECTANGLE';

export const SLOT_FOLDER_LIST_NAME = '035-RECTANGLE-BTF';
export const SLOT_FOLDER_LIST_ID = 'slot_035_RECTANGLE_BTF';

export const SLOTS_INBOX = {
  1: {
    desktop: {
      name: '091-POCZTA-1',
      id: 'slot_091-POCZTA-1',
    },
    mobile: {
      name: '091-POCZTA-MOBI-1',
      id: 'slot_091-POCZTA-MOBI-1',
    },
  },
  2: {
    desktop: {
      name: '091-POCZTA-2',
      id: 'slot_091-POCZTA-2',
    },
    mobile: {
      name: '091-POCZTA-MOBI-2',
      id: 'slot_091-POCZTA-MOBI-2',
    },
  },
} as const;

export const SET_FROM_INDEX = 4;
