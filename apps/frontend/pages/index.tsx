import styled from 'styled-components';

const StyledPage = styled.div`
  .container {
    width: 300px;
    height: 300px;
    background-color: #000;
    color: white;
  }
  .text {
    color: red;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div className="text"> hello world </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
