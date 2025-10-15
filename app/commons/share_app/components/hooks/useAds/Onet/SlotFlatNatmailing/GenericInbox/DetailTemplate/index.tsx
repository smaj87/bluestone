import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Additional from './Additional';
import Elements from './Elements';
import Footer from './Footer';
import Header from './Header';
import Hooks from './Hooks';
import {
  getElementSettings,
  isFetching as isFetchingSelector,
} from './selectors';
import { AdvertStyled } from './styles';

const Template: FC = () => {
  const isFetching = useSelector(isFetchingSelector);
  const settings = useSelector(getElementSettings);

  if (isFetching) {
    return <LoaderBouncingDots />;
  }

  return (
    <AdvertStyled
      $bgColor={settings?.creationBackgroundColor || ''}
      data-cypress="INBOX-DETAIL-CONTENT"
    >
      <Hooks />
      <Header />
      <Elements />
      <Additional />
      <Footer />
    </AdvertStyled>
  );
};

export default memo(Template);
