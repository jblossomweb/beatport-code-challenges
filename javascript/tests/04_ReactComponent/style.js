import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

const zoomIn = keyframes`
0% { transform: scale(1); }
100% { transform: scale(1.5); }
`;

export const FlexCentered = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: block;
  position: relative;
  height: 25vh;
  width: 25vw;
`;

export const Slides = styled(FlexCentered)`
  overflow: hidden;
  background: #000;
  color: #fff;
  border: 2px solid #ccc;
`;

export const Slide = styled(FlexCentered)`
  > * {
    width: 100%
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation:
      .5s ${fadeIn} ease-out,
      20s ${({ zoom }) => zoom ? zoomIn : null} ease-out infinite alternate;
  }
  img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: auto;
  }
  a {
    text-decoration: none;
    color: #a7df10;
  }
  a:hover {
    text-decoration: underline;
  }
`;
