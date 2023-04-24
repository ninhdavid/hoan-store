import styled from 'styled-components';
import Wrapper from '../components/Common/Wrapper/Wrapper';
import HeroBanner from '../components/Common/HeroBanner';
import CategoryCarousel from '@/components/Carousel/CategoryCarousel';
import ScrollCard from '@/components/Common/Scroll/ScrollCard';
import ScrollWrapper from '@/components/Common/Scroll/ScrollWrapper/ScrollWrapper';

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
                        <p>them mot category</p>
                        <ScrollWrapper ></ScrollWrapper>
                        {/* <div className=" h-[2000px]"></div> */}
                    </Wrapper>
                </StyledPage>
            </div>
        </main>
    );
}

export default Index;
