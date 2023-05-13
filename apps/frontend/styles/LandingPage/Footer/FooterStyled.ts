import styled from 'styled-components';

export const NavHoverStyled = styled.div`
    .divHover {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .divHover:hover .linkHover:not(:hover) {
        opacity: 0.3;
        transition: opacity 0.3s ease-in-out;
    }

    .linkHover:hover {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
`;
const height = 140;
const marginHeight = height;
export const ScrollTopStyled = styled.div`
    position: sticky;
    margin-right: -30px;
    bottom: 0;
    right: 0;

    & > div {
        margin-top: -${marginHeight}px;
        float: right;
        display: flex;
        cursor: pointer;
        padding: 10px;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
    .text-upright {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-align: end;
        padding-bottom: 8px;
    }
    .arrow-up {
        position: relative;
        width: 1px;
        max-height: ${height}px;
        height: ${height}px;
        background-color: #000;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 16px;
            background-color: black;
            transform: rotate(30deg) translateX(-4px);
        }
    }
    @media screen and (min-width: 1024px) {
        margin-right: -40px;
    }
    @media screen and (min-width: 1280px) {
        margin-right: -50px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: -60px;
    }
    @media screen and (min-width: 1920px) {
        margin-right: -100px;
    }
`;
