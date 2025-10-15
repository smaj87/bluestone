import { FC, Fragment, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailsUrlProps } from 'containers/App/selectors';

import { SearchQueryStyled } from './styles';

interface Props {
  value: string;
}

const HighlightSearchText: FC<Props> = ({ value }) => {
  const searchQuery = useSelector(getMailsUrlProps, 'searchQuery');

  const getHighlight = useCallback(() => {
    const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regExp = new RegExp(escaped, 'ig');
    const arr = value.split(regExp);
    const length = arr.length - 1;

    return arr.map((text, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Fragment key={i}>
        <span>{text}</span>
        <span>
          {i < length && <SearchQueryStyled>{searchQuery}</SearchQueryStyled>}
        </span>
      </Fragment>
    ));
  }, [value, searchQuery]);

  return <span>{searchQuery ? getHighlight() : value}</span>;
};

export default memo(HighlightSearchText);
