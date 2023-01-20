import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import { Footer } from "./component/Footer";
import Card from "./component/Card";
import { Container } from "./component/styled/Container.styled";
import GlobalStyles from "./component/styled/global.js";

import content from "./content";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
