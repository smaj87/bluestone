import styled from 'commons/Goober';
import { GroupButton } from 'commons/GroupActions/styles';

interface GroupButtonFontProps {
  fontFamily: string;
}

export const GroupButtonFontFamily = styled(GroupButton)<GroupButtonFontProps>`
  font-family: ${({ fontFamily }) => fontFamily};
`;
