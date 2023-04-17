import styled from 'styled-components';
import Wrapper from '../components/Common/Wrapper/Wrapper';
import HeroBanner from '../components/Common/HeroBanner';

const StyledPage = styled.div`
  .container {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <main>
      <StyledPage>
        <HeroBanner />
        <Wrapper>
          <div className="wrapper h-[2000px]">
            <div className="container"></div>
          </div>
        </Wrapper>
      </StyledPage>
    </main>
  );
}

export default Index;
