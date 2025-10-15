import { FC, memo } from 'utils/react';

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => (
  <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
      Opis
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default memo(Description);
