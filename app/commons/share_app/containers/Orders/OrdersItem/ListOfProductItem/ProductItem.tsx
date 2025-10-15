import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, ReactNode, useCallback, useMemo } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { ProductItemStyled } from './styles';

interface Props {
  index: number;
  isDetail?: boolean;
  url?: string;
  children?: ReactNode;
}

const ProductItem: FC<Props> = ({ children, index, isDetail, url }) => {
  const isShowByIndex = useMemo(() => index < 2, [index]);

  const onClick = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'go_to_product',
        event_details: {
          link: url,
        },
      }),
    );

    dataLayerPush({
      event: 'order_go_to_product',
    });

    window.open(url, '_blank');
  }, [url]);

  return (
    <>
      {url && isDetail ? (
        <ProductItemStyled
          $isShow={isDetail ? true : isShowByIndex}
          $url={url}
          onClick={onClick}
        >
          {children}
        </ProductItemStyled>
      ) : (
        <ProductItemStyled $isShow={isDetail ? true : isShowByIndex}>
          {children}
        </ProductItemStyled>
      )}
    </>
  );
};

export default memo(ProductItem);
