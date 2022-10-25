import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container";
import HeaderText from "./components/HeaderText.styled";

const App = () => {
  return (
    <>
      <Container bg="gray">
        <HeaderText color> STYLED COMPONENTS</HeaderText>
  <Button primary>Click</Button>
      <Button>Save</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container>
        <StyledLink href="https://clarusway.com/" target="_blanck"></StyledLink>
      </Container>
    
      
    </>
  );
};

export default App;
