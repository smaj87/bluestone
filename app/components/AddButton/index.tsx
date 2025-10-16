import Loader from 'components/Loader';
import { FC, memo } from 'utils/react';

interface Props {
  isAdding?: boolean;
  label: string;
  onClick: () => void;
}

const AddButton: FC<Props> = ({ isAdding = false, label, onClick }) => (
  <button
    aria-label={label}
    className="flex h-10 w-auto items-center justify-center gap-2 rounded-md border border-transparent bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    disabled={isAdding}
    onClick={onClick}
    type="button"
  >
    {isAdding ? (
      <Loader label="Dodawanie..." size="small" />
    ) : (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4v16m8-8H4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    )}
    {label}
  </button>
);

export default memo(AddButton);
