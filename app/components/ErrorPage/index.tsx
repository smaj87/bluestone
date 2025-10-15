import { fetchProducts } from 'containers/Products/actions';
import { FC, memo, useCallback } from 'utils/react';
import { dispatch } from 'utils/store';

interface ErrorPageProps {
  label: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ label }) => {
  const handleRetry = useCallback(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] p-8">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <svg
            className="w-20 h-20 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{label}</h2>
        <p className="text-gray-600 mb-6">
          Wystąpił problem podczas pobierania danych. Spróbuj ponownie.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleRetry}
          type="button"
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
};

export default memo(ErrorPage);
