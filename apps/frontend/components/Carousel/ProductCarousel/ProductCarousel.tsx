import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductCarouselProps {}

const StyledProductCarousel = styled.div`
    color: pink;
`;

export function ProductCarousel(props: ProductCarouselProps) {
    return (
        <StyledProductCarousel>
            <h1>Welcome to ProductCarousel!</h1>
        </StyledProductCarousel>
    );
}

export default ProductCarousel;
