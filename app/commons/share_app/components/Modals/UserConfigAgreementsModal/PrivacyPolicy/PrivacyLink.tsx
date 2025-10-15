import useTranslations from 'commons/hooks/useTranslations';
import Link from 'commons/Link';
import { FC, memo } from 'commons/utils/react';

interface Props {
  href: string;
}

const PrivacyLink: FC<Props> = ({ href }) => {
  const t = useTranslations();

  return (
    <Link
      color="defaultNeutral"
      href={href}
      label={t('userConfigAgreementsModalPrivacyPolicyPrivacyPolicy')}
      size="sm"
      target="_blank"
    />
  );
};

export default memo(PrivacyLink);
