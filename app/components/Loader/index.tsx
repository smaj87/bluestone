import { FC, memo } from 'utils/react';

interface LoaderProps {
  label: string;
}

const Loader: FC<LoaderProps> = ({ label }) => (
  <div className="flex justify-center items-center min-h-[400px]">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 text-center">{label}</p>
    </div>
  </div>
);

export default memo(Loader);
