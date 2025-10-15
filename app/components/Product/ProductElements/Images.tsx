import { FC, memo, useCallback } from 'utils/react';

interface Image {
  url: string;
  name: string;
}

interface Props {
  images?: Image[];
}

const Images: FC<Props> = ({ images }) => {
  const onError = useCallback((e: Event) => {
    const target = e.target as HTMLImageElement;

    target.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="sans-serif" font-size="16"%3EBrak obrazu%3C/text%3E%3C/svg%3E';
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Galeria
        </h2>
        <p className="text-gray-400 italic">
          Brak dostępnych obrazów dla tego produktu
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Galeria
      </h2>
      <div className="flex flex-wrap gap-6">
        {images.map((image) => (
          <div
            key={`${image.url}-${image.name}`}
            className="flex flex-col items-center space-y-2"
          >
            <p className="text-sm font-medium text-gray-600 text-center">
              {image.name}
            </p>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                alt={image.name}
                className="max-w-[400px] max-h-[400px] w-auto h-auto object-contain"
                onError={onError}
                src={image.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Images);
