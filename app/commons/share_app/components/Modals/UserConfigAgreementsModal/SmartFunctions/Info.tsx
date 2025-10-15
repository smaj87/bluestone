import { UserActionTileInfoStyled } from 'commons/share_app/components/UserActionTile/styles';
import { FC, memo } from 'commons/utils/react';

interface Props {
  text: string;
}

const Info: FC<Props> = ({ text }) => (
  <UserActionTileInfoStyled>
    <p>{text}</p>
  </UserActionTileInfoStyled>
);

export default memo(Info);
