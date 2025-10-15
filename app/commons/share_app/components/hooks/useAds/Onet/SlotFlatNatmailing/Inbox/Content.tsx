import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import { getValueByField } from '../selectors';
import SlotFlatAdInfo from '../SlotFlatAdInfo';
import SlotFlatBimi from '../SlotFlatBimi';
import SlotFlatCounter from '../SlotFlatCountdown';
import SlotFlatImage from '../SlotFlatImage';
import SlotFlatSnippet from '../SlotFlatSnippet';
import SlotFlatSubject from '../SlotFlatSubject';
import SlotFlatFrom from '../SlotFrom';
import {
  SlotFlatDataDetailsContentStyled,
  SlotFlatDataDetailsStyled,
  SlotFlatDataStyled,
} from '../styles';

const Content: FC = () => {
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);

  return (
    <>
      <SlotFlatBimi selector={getValueByField} />
      <SlotFlatAdInfo showLabel={!isSpam} />
      <SlotFlatDataStyled>
        <SlotFlatFrom selector={getValueByField} />
        <SlotFlatDataDetailsStyled>
          <SlotFlatImage fieldKey="image" selector={getValueByField} />
          <SlotFlatDataDetailsContentStyled>
            <SlotFlatSubject selector={getValueByField} />
            <SlotFlatSnippet
              selector={getValueByField}
              subtitleKey="subtitle"
            />
          </SlotFlatDataDetailsContentStyled>
        </SlotFlatDataDetailsStyled>
      </SlotFlatDataStyled>
      {isSpam ? <SlotFlatAdInfo /> : null}
      <SlotFlatCounter selector={getValueByField} />
    </>
  );
};

export default memo(Content);
