import {
  MobileCounterInfoStyled,
  MobileImageStyled,
} from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/styles';
import SlotFlatOffer from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/SlotFlatCountdown/SlotFlatOffer';
import SlotFlatImage from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/SlotFlatImage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getValueByField } from '../selectors';
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
import { getProductValueByField, getValueFromTemplate } from './selectors';

const MobileContent: FC = () => {
  const image = useSelector(getProductValueByField, 'img');

  return (
    <>
      <SlotFlatBimi selector={getValueByField} />
      <SlotFlatDataMobileStyled>
        <SlotFlatDetailsMobileStyled data-cypress="SLOT-INBOX-DETAILS">
          <SlotFlatDetailsMobileTopStyled>
            <SlotFlatFrom selector={getValueByField} />
            {!image ? <SlotFlatOffer selector={getValueByField} /> : null}
          </SlotFlatDetailsMobileTopStyled>
          <SlotFlatSubject selector={getValueFromTemplate} />
          <SlotFlatSnippet
            selector={getValueFromTemplate}
            subtitleKey="subtitle"
          />
        </SlotFlatDetailsMobileStyled>
        {!image ? (
          <MobileCounterInfoStyled>
            <SlotFlatCountdown selector={getValueByField} />
            <SlotFlatAdInfo />
          </MobileCounterInfoStyled>
        ) : (
          <MobileImageStyled>
            <SlotFlatImage fieldKey="img" selector={getProductValueByField} />
            <SlotFlatAdInfo />
          </MobileImageStyled>
        )}
      </SlotFlatDataMobileStyled>
    </>
  );
};

export default memo(MobileContent);
