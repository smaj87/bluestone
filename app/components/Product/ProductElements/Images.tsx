import { Image } from 'db/types';

import AddButton from 'components/AddButton';
import DeleteIcon from 'components/DeleteIcon';
import EditIcon from 'components/EditIcon';
import Modal from 'components/Modal';
import { FC, memo, useCallback, useState } from 'utils/react';

import ImageModal from '../ImageModal';

interface Props {
  images?: Image[];
  onUpdate: (key: keyof import('db/types').Product, value: Image[]) => void;
}

const Images: FC<Props> = ({ images, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<{
    image: Image;
    index: number;
  } | null>(null);

  const onError = useCallback((e: Event) => {
    const target = e.target as HTMLImageElement;

    target.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="sans-serif" font-size="16"%3EBrak obrazu%3C/text%3E%3C/svg%3E';
  }, []);

  const onAdd = useCallback(() => {
    setEditingImage(null);
    setIsModalOpen(true);
  }, []);

  const onEdit = useCallback((image: Image, index: number) => {
    setEditingImage({ image, index });
    setIsModalOpen(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
    setEditingImage(null);
  }, []);

  const onSave = useCallback(
    (image: Image) => {
      const currentImages = images || [];
      let updatedImages: Image[];

      if (editingImage !== null) {
        // Edycja istniejącego obrazu
        updatedImages = [...currentImages];
        updatedImages[editingImage.index] = image;
      } else {
        // Dodawanie nowego obrazu
        updatedImages = [...currentImages, image];
      }

      onUpdate('images', updatedImages);
      onModalClose();
    },
    [editingImage, onModalClose, images, onUpdate],
  );

  const onDelete = useCallback(
    (index: number) => {
      const currentImages = images || [];
      const updatedImages = currentImages.filter((_, i) => i !== index);
      onUpdate('images', updatedImages);
    },
    [images, onUpdate],
  );

  return (
    <>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Galeria
          </h2>
          <AddButton label="Dodaj obraz" onClick={onAdd} />
        </div>
        {!images || images.length === 0 ? (
          <p className="text-gray-400 italic">
            Brak dostępnych obrazów dla tego produktu
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {images.map((image, index) => (
              <div
                key={`${image.url}-${image.name}`}
                className="flex flex-col items-center space-y-2 group"
              >
                <p className="text-sm font-medium text-gray-600 text-center">
                  {image.name}
                </p>
                <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    alt={image.name}
                    className="max-w-[400px] max-h-[400px] w-auto h-auto object-contain"
                    onError={onError}
                    src={image.url}
                  />
                  <button
                    aria-label="Edytuj obraz"
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
                    onClick={() => onEdit(image, index)}
                    type="button"
                  >
                    <EditIcon />
                  </button>
                  <button
                    aria-label="Usuń obraz"
                    className="absolute top-2 left-2 p-2 bg-red-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    onClick={() => onDelete(index)}
                    type="button"
                  >
                    <DeleteIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={onModalClose}
        title={editingImage ? 'Edytuj obraz' : 'Dodaj nowy obraz'}
      >
        <ImageModal
          image={editingImage?.image}
          onCancel={onModalClose}
          onSave={onSave}
        />
      </Modal>
    </>
  );
};

export default memo(Images);
