import {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'utils/react';

interface Props {
  number: string;
  onUpdate: (key: keyof import('db/types').Product, value: string) => void;
}

const Number: FC<Props> = ({ number, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(number);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const onEdit = useCallback(() => {
    setEditValue(number);
    setIsEditing(true);
  }, [number]);

  const onSave = useCallback(() => {
    if (editValue.trim() !== '' && editValue !== number) {
      onUpdate('number', editValue.trim());
    }
    setIsEditing(false);
  }, [editValue, number, onUpdate]);

  const onCancel = useCallback(() => {
    setEditValue(number);
    setIsEditing(false);
  }, [number]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSave();
      } else if (e.key === 'Escape') {
        onCancel();
      }
    },
    [onSave, onCancel],
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.currentTarget.value);
  }, []);

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Numer produktu
      </h2>
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            className="text-2xl font-bold text-gray-900 border-2 border-blue-500 rounded px-2 py-1 flex-1"
            onChange={onChange}
            onKeyDown={onKeyDown}
            type="text"
            value={editValue}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={onSave}
            type="button"
          >
            Zapisz
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            onClick={onCancel}
            type="button"
          >
            Anuluj
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between group">
          <p className="text-2xl font-bold text-gray-900">{number}</p>
          <button
            aria-label="Edytuj numer produktu"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded"
            onClick={onEdit}
            type="button"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(Number);
