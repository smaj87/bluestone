import { IS_LAST_SEEN_HIGHLIGHT_CLASS } from 'commons/share_app/components/LastSeen/constants';
import { useEffect } from 'commons/utils/react';

const useHighlightItem = (itemId: string, isShow = false) => {
  useEffect(() => {
    const item = itemId ? document.getElementById(itemId) : null;

    if (isShow && item) {
      item.classList.add(IS_LAST_SEEN_HIGHLIGHT_CLASS);
    } else if (item) {
      item.classList.remove(IS_LAST_SEEN_HIGHLIGHT_CLASS);
    }

    return () => {
      item?.classList?.remove?.(IS_LAST_SEEN_HIGHLIGHT_CLASS);
    };
  }, [isShow]);

  return null;
};

export default useHighlightItem;
