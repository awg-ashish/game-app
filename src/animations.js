import { keyframes } from "styled-components";
export const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

export const pop = keyframes`
    0% {transform: scale(0); opacity: 0}
    100% { transform: scale(1); opacity: 1 }
`;

export const swirlInFwd = keyframes`{
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}`;

export const rotateIn2CW = keyframes`{0%{transform:rotate(-45deg);opacity:0}100%{transform:rotate(0);opacity:1}}`;
