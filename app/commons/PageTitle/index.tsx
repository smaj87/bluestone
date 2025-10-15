import { FC, memo } from 'commons/utils/react';

interface Props {
  title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
  document.title = title || '';
  return null;
};

export default memo(PageTitle);
