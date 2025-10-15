import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getCurrency } from '../../selectors';
import { NormalizedProduct } from '../../types';
import { getElementSettings } from './selectors';
import {
  DiscountStyled,
  RibbonStyled,
  TileAnchorStyled,
  TileButtonStyled,
  TileDatasStyled,
  TileLogoStyled,
  TileNameStyled,
  TileOldPriceStyled,
  TileOmnibusPriceStyled,
  TilePricesStyled,
  TilePriceStyled,
  TileProductStyled,
  TileStyled,
  TileTopStyled,
} from './styles';

interface Props {
  product: NormalizedProduct;
}

const Tile: FC<Props> = ({ product }) => {
  const t = useTranslations();

  const settings = useSelector(getElementSettings);
  const currency = useSelector(getCurrency);

  return (
    <TileStyled>
      <TileAnchorStyled
        $bgColor={settings?.productBoxBackgroundColor}
        data-cypress="INBOX-DETAIL-ELEMENT"
        href={product.url}
        target="_blank"
        title=""
      >
        <TileTopStyled>
          {product.isPromoShow || product.isPromoTextShow ? (
            <DiscountStyled>
              <RibbonStyled
                $bgColor={settings?.discountBackgroundColor}
                $txtColor={settings?.discountPriceColor}
              >
                <span>
                  {product.isPromoShow && (
                    <>
                      <b>{product.omnibusDiscount}%</b> {t('cheaper')}
                    </>
                  )}
                  {product.isPromoTextShow ? t('recommended') : ''}
                </span>
              </RibbonStyled>
            </DiscountStyled>
          ) : null}
          {product.logo ? (
            <TileLogoStyled>
              <img alt={t('logo')} src={product.logo} />
            </TileLogoStyled>
          ) : null}
        </TileTopStyled>

        <TileProductStyled>
          {product.img || product.title ? (
            <img alt={product.title} src={product.img} />
          ) : null}
        </TileProductStyled>

        {product.isDescriptionShow ? (
          <TileNameStyled $txtColor={settings?.titleColor}>
            {product.title}
          </TileNameStyled>
        ) : null}

        <TileDatasStyled>
          <TilePricesStyled>
            {product.isPriceShow && (
              <TilePriceStyled
                $bgColor={settings?.priceBackgroundColor}
                $txtColor={settings?.priceColor}
              >
                {product.price} {currency}
              </TilePriceStyled>
            )}

            {product.isOldPriceShow ? (
              <TileOldPriceStyled
                $bgColor={settings?.oldPriceBackgroundColor}
                $txtColor={settings?.oldPriceColor}
              >
                {product.oldPrice} {currency}
              </TileOldPriceStyled>
            ) : null}

            {product.isOmnibusPriceShow ? (
              <TileOmnibusPriceStyled
                $bgColor={settings?.omnibusPriceBackgroundColor}
                $txtColor={settings?.omnibusPriceColor}
              >
                {t('omnibusPriceDescription')} {product.omnibusPrice} {currency}
              </TileOmnibusPriceStyled>
            ) : null}
          </TilePricesStyled>

          {product.isCtaButtonShow ? (
            <TileButtonStyled
              $bgColor={settings?.backgroundColor}
              $txtColor={settings?.textColor}
            >
              {product.text}
            </TileButtonStyled>
          ) : null}
        </TileDatasStyled>
      </TileAnchorStyled>
    </TileStyled>
  );
};

export default memo(Tile);
