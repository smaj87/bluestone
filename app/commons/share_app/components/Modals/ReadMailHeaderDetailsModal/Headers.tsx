import Button from 'commons/Button';
import CopyButton from 'commons/CopyButton';
import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { close } from 'commons/Modal/actions';
import { ModalActionsStyled } from 'commons/Modal/styles';
import ReadMailHeaderErrorPage from 'commons/share_app/components/Modals/ReadMailHeaderDetailsModal/ReadMailHeaderErrorPage';
import { fetchHeaders } from 'commons/share_app/containers/ReadMail/actions';
import {
  getMailField,
  getMailHeadersField,
} from 'commons/share_app/containers/ReadMail/selectors';
import {
  Headers as HeadersType,
  ReadMailParsed,
} from 'commons/share_app/containers/ReadMail/types';
import { TabPanelStyled } from 'commons/Tabs/styles';
import { FC, memo, useCallback, useEffect, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { TAB_HEADERS_ID, TAB_PANEL_HEADERS_ID } from './constants';
import {
  LoadingStyled,
  MailHeadersItemStyled,
  MailHeadersListStyled,
} from './styles';

const Headers: FC = () => {
  const t = useTranslations();

  const mid = useSelector(getMailField, 'mid') as ReadMailParsed['mid'];

  const isFetching = useSelector(
    getMailHeadersField,
    'isFetching',
  ) as HeadersType['isFetching'];

  const isFetched = useSelector(
    getMailHeadersField,
    'isFetched',
  ) as HeadersType['isFetched'];

  const isFetchedError = useSelector(
    getMailHeadersField,
    'isFetchedError',
  ) as HeadersType['isFetchedError'];

  const values = useSelector(
    getMailHeadersField,
    'values',
  ) as HeadersType['values'];

  const stringHeaders = useMemo(() => {
    let string = '';

    values.forEach(({ header, value }) => {
      string += `${header ? `${header}: ` : ''}${value}\n`;
    });

    return string;
  }, [values]);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  useEffect(() => {
    if (!isFetchedError && !isFetched && !isFetching && mid > 0) {
      dispatch(fetchHeaders(mid));
    }
  }, [mid, isFetchedError, isFetched, isFetching]);

  if (isFetching) {
    return (
      <LoadingStyled>
        <LoaderBouncingDots />
      </LoadingStyled>
    );
  }

  if (isFetchedError) {
    return <ReadMailHeaderErrorPage />;
  }

  if (isFetched) {
    return (
      <>
        <TabPanelStyled
          aria-labelledby={TAB_HEADERS_ID}
          id={TAB_PANEL_HEADERS_ID}
          role="tabpanel"
        >
          <MailHeadersListStyled>
            {values.map(({ header, value }, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <MailHeadersItemStyled key={index} $isLabel={!!header}>
                {!!header && <b>{header}: </b>}
                {value}
              </MailHeadersItemStyled>
            ))}
          </MailHeadersListStyled>
        </TabPanelStyled>
        <ModalActionsStyled>
          <CopyButton
            label={t('ctaCopyContent')}
            size="lg"
            value={stringHeaders}
          />
          <Button
            color="secondary"
            label={t('ctaClose')}
            onClick={onClose}
            size="lg"
          />
        </ModalActionsStyled>
      </>
    );
  }

  return null;
};

export default memo(Headers);
