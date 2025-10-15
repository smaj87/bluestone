import { findKey } from 'commons/utils/tinyLodash';

const updateUnreadByKey = (draft, key, count, unread, getIn) => {
  // eslint-disable-next-line no-param-reassign
  draft[getIn[0]][key].unread = unread >= 0 ? unread : 0;
  // eslint-disable-next-line no-param-reassign
  draft[getIn[0]][key].count = count >= 0 ? count : 0;
};

/**
 * Aktualizuje licznik nieprzeczytanych wiadomości,
 * @param draft - draft produce
 * @param fid - id folderu do aktualizacji
 * @param count - o ile mamy zwikeszyc/zmniejszyc licznik
 * @param unread - jezeli istnieje to ignorujemy count i ustawiamy unread (bez incrementacji)
 */
export function updateFolderUnreadCounter(draft, fid, count, unread) {
  const getIn = ['system', '', 'unread'];
  let key = findKey(draft.system, (folder) => folder.fid === fid);

  if (!key) {
    key = findKey(draft.smart, (folder) => folder.fid === fid);
    getIn[0] = 'smart';
  }

  if (!key) {
    key = findKey(draft.custom, (folder) => folder.fid === fid);
    getIn[0] = 'custom';
  }

  if (key) {
    getIn[1] = key;
    updateUnreadByKey(draft, key, count, unread, getIn);
  }
}

export function updateLabelUnreadCounter(draft, lid, count, unread) {
  const getIn = ['system', '', 'unread'];
  let key = '';

  if (lid >= 0) {
    key = findKey(draft.popsyncLabels, (folder) => folder.lid === lid);

    getIn[0] = 'popsyncLabels';
    getIn[1] = key;
  }

  if (key) {
    updateUnreadByKey(draft, key, count, unread, getIn);
  }
}

export function resetFolderCounter(draft, fid) {
  const key = findKey(draft.system, (folder) => folder.fid === fid) || false;

  if (key) {
    // eslint-disable-next-line no-param-reassign
    draft.system[key].count = 0;
    // eslint-disable-next-line no-param-reassign
    draft.system[key].unread = 0;
  }
}
