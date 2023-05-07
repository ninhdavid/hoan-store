import styled from 'styled-components'

export const ImageSlide = styled.div`
    .img-slide {
        position: absolute;
        width: 81%;
        height: 90%;
        border-radius: 8px;
        left: -125%;
    }
    .next,
    .prev {
        top: calc(50% - 20px);
        position: absolute;
        background: white;
        border-radius: 30px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 24px;
        z-index: 2;
    }
    .next {
        right: 0px;
    }

    .prev {
        left: 0px;
        transform: scale(-1);
    }

    @media screen and (min-width: 768px) {
        .img-slide {
            width: 70%;
            left: -102%;
            cursor: -webkit-grab;
            cursor: grab;
        }
    }
    @media screen and (min-width: 1024px) {
        .img-slide {
            width: 65%;
            left: -90%;
            cursor: -webkit-grab;
            cursor: grab;
        }
    }
    @media screen and (min-width: 1536px) {
        .img-slide {
            width: 60%;
            left: -80%;
            cursor: -webkit-grab;
            cursor: grab;
        }
    }
`;