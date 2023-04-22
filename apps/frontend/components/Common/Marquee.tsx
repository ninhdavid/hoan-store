import styled, { keyframes } from 'styled-components';

type Props = {
    children: React.ReactNode[];
    className: string;
    direction?: string;
};

const marquee = (from, to) => keyframes`
from {
  transform: translateX(${from}) ;
}
to{
  transform: translateX(${to});
}
`;

const TextAnimate = styled.div<{ direction?: string }>`
    will-change: transform;
    position: relative;
    transform: translateX(${(props) => (props.direction === 'forward' ? '70vw' : '30vw')});

    & > p {
        transform: translateX(${(props) => (props.direction === 'forward' ? '-200%' : '200%')})
            scaleX(${(props) => (props.direction === 'forward' ? '-1' : '1')});
        animation: ${(props) =>
                props.direction === 'forward' ? marquee('-200%', '200%') : marquee('200%', '-200%')}
            20s linear infinite;
        right: ${(props) => (props.direction === 'forward' ? 'auto' : '0')};
        left: ${(props) => (props.direction === 'forward' ? '0' : 'auto')};
        position: absolute;

        &:nth-of-type(1n) {
            animation-delay: 0s;
        }
        &:nth-of-type(2n) {
            animation-delay: 5s;
        }
        &:nth-of-type(3n) {
            animation-delay: 10s;
        }
        &:nth-of-type(4n) {
            animation-delay: 15s;
        }
    }
`;

function Marquee(props: Props) {
    return (
        <TextAnimate direction={props?.direction} className={props.className}>
            {props.children}
        </TextAnimate>
    );
}

export default Marquee;
