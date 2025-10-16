import { Image } from 'db/types';

import { FC, memo, useCallback, useEffect, useState } from 'utils/react';

interface Props {
  image?: Image;
  onCancel: () => void;
  onSave: (image: Image) => void;
}

const ImageModal: FC<Props> = ({ image, onCancel, onSave }) => {
  const [name, setName] = useState(image?.name || '');
  const [url, setUrl] = useState(image?.url || '');

  useEffect(() => {
    setName(image?.name || '');
    setUrl(image?.url || '');
  }, [image]);

  const handleSave = useCallback(() => {
    if (name.trim() && url.trim()) {
      onSave({ name: name.trim(), url: url.trim() });
    }
  }, [name, onSave, url]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSave();
      }
    },
    [handleSave],
  );

  return (
    <div className="space-y-4">
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="image-name"
        >
          Nazwa obrazu
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id="image-name"
          onChange={(e) => setName(e.currentTarget.value)}
          onKeyDown={onKeyDown}
          placeholder="Np. Widok z przodu"
          type="text"
          value={name}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="image-url"
        >
          URL obrazu
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          id="image-url"
          onChange={(e) => setUrl(e.currentTarget.value)}
          onKeyDown={onKeyDown}
          placeholder="https://example.com/image.jpg"
          type="url"
          value={url}
        />
      </div>
      <div className="flex justify-end gap-2 pt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          onClick={onCancel}
          type="button"
        >
          Anuluj
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!name.trim() || !url.trim()}
          onClick={handleSave}
          type="button"
        >
          Zapisz
        </button>
      </div>
    </div>
  );
};

export default memo(ImageModal);
