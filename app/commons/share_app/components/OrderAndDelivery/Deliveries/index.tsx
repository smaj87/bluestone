import MobileLoader from 'commons/MobileLoader';
import {
  getDeliveriesFromSchema,
  getMailField,
} from 'commons/share_app/containers/ReadMail/selectors';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Tabs from 'components/Schema/components/Tabs';
import { TabPanelStyled } from 'components/Schema/components/Tabs/styles';
import {
  SchemaCardDataStyled,
  SchemaCardStyled,
  SchemaContentStyled,
} from 'components/Schema/styles';

import DecorationCard from '../components/DecorationCard';
import DeliveryItem from './DeliveryItem';
import { Delivery as DeliveryType } from './types';

const Deliveries: FC = () => {
  const deliveries: DeliveryType[] = useSelector(getDeliveriesFromSchema);
  const mid = useSelector(getMailField, 'mid') as number;
  const tabs = deliveries.map((d) => ({
    key: d.trackingNumber,
    tabName: d.partOfOrder?.merchant?.name,
  }));
  const [activeTabKey, setActiveTabKey] = useState(tabs[0]?.key);
  const currentDelivery = deliveries.find(
    (d) => d.trackingNumber === activeTabKey,
  );

  useEffect(() => {
    setActiveTabKey(tabs[0]?.key);
  }, [mid]);

  const switchTab = useCallback((newKey: string) => {
    setActiveTabKey(newKey);
  }, []);

  return deliveries.length ? (
    <SchemaContentStyled>
      <SchemaCardStyled>
        <MobileLoader desktop={<DecorationCard icon="shopping" />} />
        <SchemaCardDataStyled>
          <Tabs activeKey={activeTabKey} switchTab={switchTab} tabs={tabs} />
          <TabPanelStyled role="tabpanel">
            <DeliveryItem delivery={currentDelivery} />
          </TabPanelStyled>
        </SchemaCardDataStyled>
      </SchemaCardStyled>
    </SchemaContentStyled>
  ) : null;
};

export default memo(Deliveries);
