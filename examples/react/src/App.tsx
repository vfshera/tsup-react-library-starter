import { H1, H3 } from "sample-react-library/headings";
import { IconGithub, IconInstagram, Button } from "sample-react-library";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <H1>Vite + React</H1>
      <Button>Hello World!</Button>
      <IconGithub />
      <IconInstagram />

      <H3>Click on the Vite and React logos to learn more</H3>
    </div>
  );
}

export default App;
