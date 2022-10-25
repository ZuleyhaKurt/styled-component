import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Container bg="gray">
  <Button primary>Click</Button>
      <Button>Save</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </Container>
    
      
    </>
  );
};

export default App;
