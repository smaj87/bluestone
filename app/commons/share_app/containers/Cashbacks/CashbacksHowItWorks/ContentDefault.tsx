import useTranslations from 'commons/hooks/useTranslations';
import {
  HowItWorksBigStepStyled,
  HowItWorksCellNoImgStyled,
  HowItWorksCellStepWrapperStyled,
  HowItWorksCellTitleGoodieStyled,
  HowItWorksGridNoImgStyled,
} from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import { FC, memo } from 'commons/utils/react';

const ContentDefault: FC = () => {
  const t = useTranslations();
  return (
    <HowItWorksGridNoImgStyled>
      <HowItWorksCellNoImgStyled>
        <HowItWorksCellStepWrapperStyled>
          <HowItWorksBigStepStyled>1</HowItWorksBigStepStyled>
        </HowItWorksCellStepWrapperStyled>
        <HowItWorksCellTitleGoodieStyled>
          <p>{t('cashbackDefaultHiWTitle1')}</p>
          <span>{t('cashbackDefaultHiWContent1')}</span>
        </HowItWorksCellTitleGoodieStyled>
      </HowItWorksCellNoImgStyled>
      <HowItWorksCellNoImgStyled>
        <HowItWorksCellStepWrapperStyled>
          <HowItWorksBigStepStyled>2</HowItWorksBigStepStyled>
        </HowItWorksCellStepWrapperStyled>
        <HowItWorksCellTitleGoodieStyled>
          <p>{t('cashbackDefaultHiWTitle2')}</p>
          <span>{t('cashbackDefaultHiWContent2')}</span>
        </HowItWorksCellTitleGoodieStyled>
      </HowItWorksCellNoImgStyled>
      <HowItWorksCellNoImgStyled>
        <HowItWorksCellStepWrapperStyled>
          <HowItWorksBigStepStyled>3</HowItWorksBigStepStyled>
        </HowItWorksCellStepWrapperStyled>
        <HowItWorksCellTitleGoodieStyled>
          <p>{t('cashbackDefaultHiWTitle3')}</p>
          <span>{t('cashbackDefaultHiWContent3')}</span>
        </HowItWorksCellTitleGoodieStyled>
      </HowItWorksCellNoImgStyled>
      <HowItWorksCellNoImgStyled>
        <HowItWorksCellStepWrapperStyled>
          <HowItWorksBigStepStyled>4</HowItWorksBigStepStyled>
        </HowItWorksCellStepWrapperStyled>
        <HowItWorksCellTitleGoodieStyled>
          <p>{t('cashbackDefaultHiWTitle4')}</p>
          <span>{t('cashbackDefaultHiWContent4')}</span>
        </HowItWorksCellTitleGoodieStyled>
      </HowItWorksCellNoImgStyled>
    </HowItWorksGridNoImgStyled>
  );
};

export default memo(ContentDefault);
