import {
  MobileCounterInfoStyled,
  MobileImageStyled,
} from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/styles';
import SlotFlatOffer from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/SlotFlatCountdown/SlotFlatOffer';
import SlotFlatImage from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/SlotFlatImage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import SlotFlatAdInfo from '../SlotFlatAdInfo';
import SlotFlatBimi from '../SlotFlatBimi';
import SlotFlatCountdown from '../SlotFlatCountdown';
import SlotFlatSnippet from '../SlotFlatSnippet';
import SlotFlatSubject from '../SlotFlatSubject';
import SlotFlatFrom from '../SlotFrom';
import {
  SlotFlatDataMobileStyled,
  SlotFlatDetailsMobileStyled,
  SlotFlatDetailsMobileTopStyled,
} from '../styles';
import { getValueByField } from './selectors';

const MobileContent: FC = () => {
  const image = useSelector(getValueByField, 'image');

  return (
    <>
      <SlotFlatBimi selector={getValueByField} />
      <SlotFlatDataMobileStyled>
        <SlotFlatDetailsMobileStyled data-cypress="SLOT-INBOX-DETAILS">
          <SlotFlatDetailsMobileTopStyled>
            <SlotFlatFrom selector={getValueByField} />
            {image ? <SlotFlatOffer selector={getValueByField} /> : null}
          </SlotFlatDetailsMobileTopStyled>
          <SlotFlatSubject selector={getValueByField} />
          <SlotFlatSnippet selector={getValueByField} subtitleKey="excerpt" />
        </SlotFlatDetailsMobileStyled>
        {!image ? (
          <MobileCounterInfoStyled>
            <SlotFlatAdInfo />
            <SlotFlatCountdown selector={getValueByField} />
          </MobileCounterInfoStyled>
        ) : (
          <MobileImageStyled>
            <SlotFlatImage fieldKey="image" selector={getValueByField} />
            <SlotFlatAdInfo />
          </MobileImageStyled>
        )}
      </SlotFlatDataMobileStyled>
    </>
  );
};

export default memo(MobileContent);
