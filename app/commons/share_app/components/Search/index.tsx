import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailsUrlProps } from 'containers/App/selectors';

import ButtonToggle from './ButtonToggle';
import SearchForm from './SearchForm';
import { isOpen as isOpenSelector } from './selectors';
import { SearchContentStyled, SearchStyled } from './styles';

const Search: FC = () => (
  <SearchStyled>
    <SearchContentStyled $isOpen={useSelector(isOpenSelector)}>
      <SearchForm urlValue={useSelector(getMailsUrlProps, 'searchQuery')} />
    </SearchContentStyled>
    <ButtonToggle isOpenMode />
  </SearchStyled>
);

export default memo(Search);
