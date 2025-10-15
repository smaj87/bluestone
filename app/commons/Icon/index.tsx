import styled from 'commons/Goober';

import iconImage, { IconImage } from './iconImage';

export interface IconProps {
  $image: IconImage;
}

const Icon = styled('i')<IconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;

  &:before {
    content: '${({ $image }) => iconImage[$image] || ''}';
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'webmail' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Icon;
