import styled, { keyframes } from 'styled-components';

export const modalPopupTop = keyframes`
    0%{opacity: 0;
        transform: translateY(100%)}
    60%{opacity: 0.3;
        transform: translateY(90%)}
    100%{opacity:1;
        transform: translateY(0%)}
`;
export const modalPopup = keyframes`
        0%{opacity: 0;
            transform: translateX(-100%)}
        50%{opacity: 0.5;
            transform: translateX(-20%)}
        100%{opacity:1;
            transform: translateX(0%)}
`;
export const buttonPopup = keyframes`
    0%{opacity: 0;
        transform: translateY(-80px)}
    100%{opacity:1;
        transform: translateY(80px)}
`;

// will not use
export const buttonPopupLarge = keyframes`
    from{opacity: 0;
        transform: translateY(-80px)}
    to{opacity:1;
        transform: translateY(90px)}
`;
//

export const subModalPopup = keyframes`
    0%{opacity: 0;
        left: -540px}
    50%{opacity: 0;
        right:-500px}
    100%{opacity:1;
        right:-900px}
`;

export const closeModalPopup = keyframes`
    0%{
        transform:translateX(0%)}
    33%{
        transform: translateX(0%)}
    100%{
        transform: translateX(-100%)}
`;
export const closeSubModalPopup = keyframes`
    0%{opacity: 1;
        right:-900px}
    100%{opacity: 0;
        right: -540px}
`;
export const closeModalPopupTop = keyframes`
0%{opacity:1;
    transform: translateY(0%)}
50%{opacity: 1;
    transform: translateY(10%)}
100%{opacity:0;
    transform: translateY(100%)}
`;

export const willHiddenButtonPopup = keyframes`
    0%{opacity: 1;}
    100%{opacity:0;}
`;

export const ModalWrapperStyled = styled.div`
    .modalPopup {
        animation: ${modalPopupTop} 0.3s ease-in forwards;
    }
    .subModalPopup {
        animation: ${subModalPopup} 0.8s ease-out forwards;
        animation-delay: 0.4s;
    }
    .closeModalPopup {
        animation: ${closeModalPopup} 0.6s ease-out forwards;
    }
    .closeModalPopupTop {
        animation: ${closeModalPopupTop} 0.3s ease-out forwards;
    }
    .closeSubModalPopup {
        animation: ${closeSubModalPopup} 0.2s ease-in forwards;
    }
    .willHiddenButtonPopup {
        animation: ${willHiddenButtonPopup} 0.3s ease-out forwards;
    }
    .buttonPopup {
        animation: ${buttonPopup} 0.3s ease-in forwards;
        animation-delay: 0.3s;
    }
    @media screen and (min-width: 1024px) {
        .modalPopup {
            animation: ${modalPopup} 0.4s ease-out forwards;
        }
    }
    @media screen and (min-width: 768px) {
        .buttonPopup {
            animation: ${buttonPopupLarge} 0.3s ease-in forwards;
        }
        .willHiddenButtonPopup {
            animation: ${willHiddenButtonPopup} 0.4s ease-out forwards;
        }
    }
`;
