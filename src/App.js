import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import { Container } from "./component/styled/Container.styled";
import GlobalStyles from "./component/styled/global.js";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <h1>Hello World!</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
