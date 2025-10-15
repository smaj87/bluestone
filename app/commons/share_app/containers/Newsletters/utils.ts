import { NormalizedUrlResult } from 'commons/share_app/components/RouterHelpers/utils';
import { SORT_TYPES } from 'commons/share_app/containers/Newsletters/NewslettersSortDropdown/constants';

import { Newsletter, NewslettersSortType, UrlParamsInterface } from './types';

export const sortNewslettersByType = (
  newsletters: Newsletter[],
  sortType: NewslettersSortType,
): Newsletter[] => [
  ...newsletters.sort((a, b) => {
    // defaultowo sortujemy po from
    const aFrom = a.from.name.toLowerCase() || a.from.email.toLowerCase();
    const bFrom = b.from.name.toLowerCase() || b.from.email.toLowerCase();

    if (sortType === 'count') {
      const countDifference = b.count - a.count;

      // jezeli nie jestesmy w stanie porownac po count to porownujemy po from
      return countDifference !== 0
        ? countDifference
        : aFrom.localeCompare(bFrom);
    }

    if (sortType === 'seenRatio') {
      // Porównywanie float z tolerancją
      const tolerance = 0.001;

      return Math.abs(parseFloat(b.seenRatio) - parseFloat(a.seenRatio)) <
        tolerance
        ? 0
        : parseFloat(b.seenRatio) - parseFloat(a.seenRatio);
    }

    return aFrom.localeCompare(bFrom);
  }),
];

export const defaultUrlParams: UrlParamsInterface = {
  sort: 'from',
};

export const normalizedUrlParams = (urlParams: NormalizedUrlResult) =>
  ({
    sort:
      urlParams.sort &&
      SORT_TYPES.includes(urlParams.sort as NewslettersSortType)
        ? urlParams.sort
        : defaultUrlParams.sort,
  }) as UrlParamsInterface;
