import styled, { keyframes } from 'styled-components';

type Props = {
  children: React.ReactNode[];
  className: string;
};

const marquee = (prev, trans) => keyframes`
  from {
    transform: translateX(${prev});
  }
  to {
    transform: translateX(${trans});
  }
`;
const TextAnimate = styled.div`
  will-change: transform;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  transform: translateX(-100%);

  & p:nth-of-type(1) {
    transform: translateX(200%);
    animation: ${marquee('200%', '-200%')} 32s linear infinite;
    right: 0;
    position: absolute;
    font-weight: 500;
  }

  & p:nth-of-type(2) {
    transform: translateX(200%);
    animation: ${marquee('200%', '-200%')} 32s linear infinite;
    animation-delay: 8s;
    right: 0;
    position: absolute;
    font-weight: 500;
  }

  & p:nth-of-type(3) {
    transform: translateX(200%);
    animation: ${marquee('200%', '-200%')} 32s linear infinite;
    animation-delay: 16s;
    right: 0;
    position: absolute;
    font-weight: 500;
  }
  & p:nth-of-type(4) {
    transform: translateX(200%);
    animation: ${marquee('200%', '-200%')} 32s linear infinite;
    animation-delay: 24s;
    right: 0;
    position: absolute;
    font-weight: 500;
  }
`;
function Marquee(props: Props) {
  return (
    <TextAnimate className={props.className}>{props.children}</TextAnimate>
  );
}

export default Marquee;
