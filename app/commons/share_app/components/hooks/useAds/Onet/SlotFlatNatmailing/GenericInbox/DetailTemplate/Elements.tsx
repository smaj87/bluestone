import { FC, memo, ReactNode, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Banner from './Banner';
import { getBanners, getElements } from './selectors';
import { TilesRowStyled } from './styles';
import Tile from './Tile';

const elementsPerRow = 4;

const Elements: FC = () => {
  const banners = useSelector(getBanners);
  const elements = useSelector(getElements);

  const content = useMemo<ReactNode[]>(() => {
    const result: ReactNode[] = [];
    let i = 0;

    const renderElementsContent = (min: number, max: number) => {
      const resultElements: ReactNode[] = [];

      for (let j = min; j < max; j += 1) {
        resultElements.push(
          <Tile key={`DasTile_${j}`} product={elements[j]} />,
        );
      }

      return resultElements;
    };

    banners.forEach((banner) => {
      result.push(<Banner key={`Banner_${i}`} {...banner} />);

      result.push(
        <TilesRowStyled key={`DasTilesRowStyled_${i}`}>
          {renderElementsContent(
            i * elementsPerRow,
            Math.min(i * elementsPerRow + elementsPerRow, elements.length),
          )}
        </TilesRowStyled>,
      );

      i += 1;
    });

    if (i * elementsPerRow < elements.length) {
      // there is more elements
      result.push(
        <TilesRowStyled key={`DasTilesRowStyled_${i}`}>
          {renderElementsContent(i * elementsPerRow, elements.length)}
        </TilesRowStyled>,
      );
    }

    return result;
  }, [banners]);

  return <>{content}</>;
};

export default memo(Elements);
