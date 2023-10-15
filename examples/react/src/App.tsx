import { H1, H3 } from "sample-react-library/headings";
import {
  IconGithub,
  IconInstagram,
  Button,
  Avatar,
} from "sample-react-library";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
      <H1>Vite + React</H1>
      <Button>Hello World!</Button>
      <IconGithub />
      <IconInstagram />

      <H3>Click on the Vite and React logos to learn more</H3>
    </div>
  );
}

export default App;
