import styled, { css, keyframes } from 'styled-components';

export const CollectionCardStyled = styled.section`
    width: 100%;
    height: 100%;

    .collection-content {
        overflow: hidden;

        & div img {
            opacity: 0.95;
            transform: scale(1.15);
            transition: transform 300ms ease-out;
        }

        &:hover div img {
            opacity: 1;
            transform: scale(1);
            transition: transform 800ms ease-in-out;
        }
    }
`;
