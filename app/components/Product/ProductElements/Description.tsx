import { FC, memo, useCallback } from 'utils/react';

import { useEditableField } from './useEditableField';

interface Props {
  description: string;
  onUpdate: (key: keyof import('db/types').Product, value: string) => void;
}

const Description: FC<Props> = ({ description, onUpdate }) => {
  const handleSave = useCallback(
    (value: string) => {
      onUpdate('description', value);
    },
    [onUpdate],
  );

  const {
    editValue,
    inputRef,
    isEditing,
    onCancel,
    onChange,
    onEdit,
    onKeyDown,
    onSave,
  } = useEditableField({
    initialValue: description,
    onSave: handleSave,
  });

  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Opis
      </h2>
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            className="w-full text-lg text-gray-700 leading-relaxed border-2 border-blue-500 rounded px-3 py-2 min-h-[120px]"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={editValue}
          />
          <div className="flex items-center gap-2">
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
            <span className="text-sm text-gray-500 ml-2">
              Enter - nowa linia, Esc - anuluj
            </span>
          </div>
        </div>
      ) : (
        <div className="group">
          <div className="flex items-start justify-between">
            <p className="text-lg text-gray-700 leading-relaxed flex-1">
              {description}
            </p>
            <button
              aria-label="Edytuj opis"
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded ml-2"
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
        </div>
      )}
    </div>
  );
};

export default memo(Description);
