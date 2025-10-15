import Modal from 'commons/Modal';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { READ_MAIL_HEADER_DETAILS_MODAL_ID } from '../constants';
import DetailsPanel from './DetailsPanel';
import Headers from './Headers';
import TabsList, { CONTENT_TYPES } from './TabsList';

const ReadMailHeaderDetailsModal: FC = () => {
  const isOpen = useSelector(
    isOpenByModalId,
    READ_MAIL_HEADER_DETAILS_MODAL_ID,
  );
  const params = useSelector(getParams);

  return isOpen ? (
    <Modal size="md">
      <TabsList type={params.type} />
      {params.type !== CONTENT_TYPES.headers ? <DetailsPanel /> : <Headers />}
    </Modal>
  ) : null;
};

export default memo(ReadMailHeaderDetailsModal);
