import Carousel from "./components/Carousel/Carousel";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Welcome to King's Kitchen</h1>
        <p>-Main Course-</p>
      </TitleWrapper>
        
      <Carousel/>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;
