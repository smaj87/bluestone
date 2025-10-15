import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setIsOpen, setValue as setValueAction } from './actions';
import ButtonToggle from './ButtonToggle';
import { SEARCH_FORM_FIELD_ID } from './constants';
import { isOpen as isOpenSelector } from './selectors';
import {
  SearchFieldStyled,
  SearchFormContentStyled,
  SearchFormStyled,
  SearchLabelStyled,
} from './styles';

interface Props {
  urlValue: string;
}

const SearchForm: FC<Props> = ({ urlValue = '' }) => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenSelector);

  const [value, setValue] = useState(urlValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        dispatch(setValueAction(value));
      }
    },
    [value],
  );

  const onReset = useCallback(() => {
    setValue('');
    dispatch(setValueAction(''));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onClick = useCallback(() => {
    dispatch(setValueAction(value));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  useEffect(() => {
    setValue(urlValue);

    if (urlValue) {
      dispatch(setIsOpen(true));
    }
  }, [urlValue]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <SearchFormStyled data-cypress="SEARCH-FORM">
      <ButtonToggle />
      <SearchFormContentStyled>
        <SearchLabelStyled
          className={VISUALLY_HIDDEN_CLASS}
          htmlFor={SEARCH_FORM_FIELD_ID}
        >
          {/* TODO - optymalizacja tłumaczeń */}
          {t('searchListsPlaceholder')}
        </SearchLabelStyled>
        <SearchFieldStyled
          ref={inputRef}
          data-cypress="SEARCH-FIELD"
          id={SEARCH_FORM_FIELD_ID}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={t('searchListsPlaceholder')}
          type="search"
          value={value}
        />
      </SearchFormContentStyled>
      {!!value && (
        <Button
          color="error"
          cypressId="SEARCH-FORM-CLEAR"
          icon="trash"
          onClick={onReset}
          size="md"
          title={t('ctaClear')}
        />
      )}
      <Button
        color="secondary"
        cypressId="BUTTON-SEARCH"
        icon="search"
        isDisabled={!value}
        onClick={onClick}
        size="md"
        title={t('ctaSearch')}
      />
    </SearchFormStyled>
  );
};

export default memo(SearchForm);
