import { getEditorById } from 'commons/Editor/selectors';
import { srcToBase64Url } from 'commons/Editor/utils';
import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncing from 'commons/LoaderBouncing';
import { LoaderBouncingContainerStyled } from 'commons/LoaderBouncing/styles';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  IMAGE_IS_UPLOADING_CLASS,
  IMG_MIN_SIZE_TO_OPEN_CONVERSION_MODAL,
  SQUIRE_IMG_ID_KEY,
} from '../../Squire/Constants';
import { IMAGE_CONVERSION_MODAL_ID } from './constants';
import {
  ButtonConversion,
  ConversionOptionsStyled,
  ConversionStyled,
} from './styles';

// ! IMPORTANT ! Ten modal nie otwiera się w przypadku, gdy uzytkownik wrzuca HTML lub uzywa naszego context menu do wklejania obrazka, bo wtedy jest to HTML
// i moze byc duzo obrazkow, wiec nie ma sensu otwierac wielu modali informujacych o wielkosci za duzej, tylko wtedy, gdy uzytkownik wrzuca obrazek z dysku lub z CTRL+V (wtedy gdy jest tylko obrazek a nie HTML)

interface Props {
  editorId: string;
}

const ImageConversionModal: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenByModalId, IMAGE_CONVERSION_MODAL_ID);
  const { files } = useSelector(getParams);
  const [isLoading, setIsLoading] = useState(true);
  const images = useRef<{ img: HTMLImageElement; file: File }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      images.current = [];

      for (let i = 0; i < files.length; i += 1) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const img = new Image();

          img.src = e?.target?.result as string;

          images.current = [...images.current, { img, file: files[i] }];
        };

        // eslint-disable-next-line no-await-in-loop
        await reader.readAsDataURL(files[i]);
      }
    };

    if (files?.length > 0) {
      setIsLoading(true);
      loadImages();
      setIsLoading(false);
    }
  }, [files]);

  // stary file jest bezuzyteczny, bo w nim base64 jest ten duzy w oryginale, a my musimy zrobic nowy base64 i na podstawie tego zrobic File aby zrobic upload na serwer (tutaj mozemy wykorzystac uploadImageBase64 w edytorze, ktory napisalem do uploadowania zdjec po wklejeniu HTMLA, jezeli zawiera obrazki w base64)
  // async aby nie blokowac UI, zamykamy modal i dzialamy nad zdjeciem w tle na sztucznym watku
  const chooseImgQuality = useCallback(
    async (qualityVariant: number) => {
      const editor = getStateValueBySelector(getEditorById, editorId);

      const uploadAndInsertImage = async (
        image: HTMLImageElement,
        file: File,
      ) => {
        if (image.src && editor) {
          let base64 = image.src;

          const id = editor.getImageId();

          // prawie wszystkie te rozdzielczosci w standards są od siebie 1.5 większe od poprzedniej, wiec dzielimy przez 2 do kwadratu tyle razy, ile wariant wybrany rozni sie od obecnej rozdzielczosci aby uzyskac odpowiednia skalę
          if (file.size > IMG_MIN_SIZE_TO_OPEN_CONVERSION_MODAL) {
            // eslint-disable-next-line no-await-in-loop
            base64 = (await srcToBase64Url(
              image.src,
              1 / 1.4 ** qualityVariant,
            )) as string;
          }

          editor?.uploadImageBase64(base64, id);
          editor?.insertImage(base64, {
            class: IMAGE_IS_UPLOADING_CLASS,
            [SQUIRE_IMG_ID_KEY]: id,
          });
        }
      };

      if (images?.current?.length > 0) {
        for (let i = 0; i < images.current?.length; i += 1) {
          const { file, img } = images.current[i];
          // eslint-disable-next-line no-await-in-loop
          await uploadAndInsertImage(img, file);
        }
      }

      closeModal();
    },
    [editorId],
  );

  const closeModal = useCallback(() => {
    // ustawiamy setisLoading ze wzgledu na to, ze gdy znowu ktos otworzy modal to nie bedzie widzial loadera odrazu, tylko przez ułamek sekundy przyciski, bo załadowywuje się plik (tak się dzieje na słabych urządzeniach spowolnienie 6 krotne)
    setIsLoading(true);
    dispatch(close());
  }, []);

  return isOpen ? (
    <Modal onClose={closeModal} title={t('imageConversionTitle')}>
      <p>{t('imageConversionText')}</p>
      {isLoading ? (
        <LoaderBouncingContainerStyled>
          <LoaderBouncing />
        </LoaderBouncingContainerStyled>
      ) : (
        <ConversionStyled>
          <ConversionOptionsStyled $isSingleOption role="group">
            <ButtonConversion
              color="default"
              icon="image"
              label={t('ctaCurrentQualityInfo')}
              onClick={() => chooseImgQuality(0)}
            />
          </ConversionOptionsStyled>
          <p>{t('or')}</p>
          <ConversionOptionsStyled role="group">
            <ButtonConversion
              color="default"
              icon="image"
              label={t('ctaLowQualityInfo')}
              onClick={() => chooseImgQuality(3)}
            />
            <ButtonConversion
              color="default"
              icon="image"
              label={t('ctaMidQualityInfo')}
              onClick={() => chooseImgQuality(2)}
            />
            <ButtonConversion
              color="default"
              icon="image"
              label={t('ctaHighQualityInfo')}
              onClick={() => chooseImgQuality(1)}
            />
          </ConversionOptionsStyled>
        </ConversionStyled>
      )}
    </Modal>
  ) : null;
};

export default memo(ImageConversionModal);
