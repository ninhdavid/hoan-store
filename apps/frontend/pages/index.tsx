import styled from 'styled-components';
import Wrapper from '../components/Common/Wrapper/Wrapper';
import HeroBanner from '../components/Common/HeroBanner';
import ProductCard from '@/components/Product/ProductCard';
import CategoryCarousel from '@/components/Carousel/CategoryCarousel';

const StyledPage = styled.div``;

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */
    return (
        <main>
            <div className=" mx-auto">
                <HeroBanner />
                <StyledPage className="w-full">
                    <Wrapper className="scroll-smooth max-w-[1640px] ">
                        <CategoryCarousel></CategoryCarousel>
                        <div className=" h-[2000px]"></div>
                    </Wrapper>
                </StyledPage>
            </div>
        </main>
    );
}

export default Index;
