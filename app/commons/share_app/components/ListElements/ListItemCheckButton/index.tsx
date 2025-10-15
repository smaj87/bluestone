import { ListItemCheckButtonStyled } from 'commons/share_app/components/ListElements/ListItemCheckButton/styles';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

interface Props {
  label: string;
  onClickFunc: (e: any) => void;
}

const ListItemCheckButton: FC<Props> = ({ label, onClickFunc }) => (
  <ListItemCheckButtonStyled onClickCapture={onClickFunc} type="button">
    {label ? <span className={VISUALLY_HIDDEN_CLASS}>{label}</span> : null}
  </ListItemCheckButtonStyled>
);

export default memo(ListItemCheckButton);
