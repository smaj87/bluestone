import styled from 'commons/Goober';
import { GroupButton } from 'commons/GroupActions/styles';

interface GroupButtonFontSizeProps {
  fontSize?: string;
}

export const GroupButtonFontSize = styled(
  GroupButton,
)<GroupButtonFontSizeProps>`
  font-size: ${({ fontSize }) => fontSize};
`;
