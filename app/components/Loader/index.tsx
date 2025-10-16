import { FC, memo } from 'utils/react';

interface LoaderProps {
  label: string;
  size?: 'small' | 'large';
}

const Loader: FC<LoaderProps> = ({ label, size = 'large' }) => {
  if (size === 'small') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        <span className="text-sm">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-center">{label}</p>
      </div>
    </div>
  );
};

export default memo(Loader);
