import MobileLoader from 'commons/MobileLoader';
import {
  getMailField,
  getOrdersFromSchema,
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
import { Order } from '../types';
import OrderItem from './OrderItem';

const Orders: FC = () => {
  const orders: Order[] = useSelector(getOrdersFromSchema);
  const mid = useSelector(getMailField, 'mid') as number;

  const tabs = orders.map((o) => ({
    key: o.id,
    tabName: o.merchant?.name,
  }));
  const [activeTabKey, setActiveTabKey] = useState(tabs[0]?.key);
  const currentOrder = orders.find((o) => o.id === activeTabKey);

  useEffect(() => {
    setActiveTabKey(tabs[0]?.key);
  }, [mid]);

  const switchTab = useCallback((newKey: string) => {
    setActiveTabKey(newKey);
  }, []);

  return orders.length ? (
    <SchemaContentStyled>
      <SchemaCardStyled>
        <MobileLoader desktop={<DecorationCard icon="shopping" />} />
        <SchemaCardDataStyled>
          <Tabs activeKey={activeTabKey} switchTab={switchTab} tabs={tabs} />
          <TabPanelStyled role="tabpanel">
            <OrderItem order={currentOrder} />
          </TabPanelStyled>
        </SchemaCardDataStyled>
      </SchemaCardStyled>
    </SchemaContentStyled>
  ) : null;
};

export default memo(Orders);
