import type { MetaFunction } from "@remix-run/node";
import { H1 } from "sample-react-library/headings";
import { Button } from "sample-react-library/button";
import { IconLinkedin, IconMastodon } from "sample-react-library/icons";
import { Avatar } from "sample-react-library";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
      <H1>Welcome to Remix</H1>
      <Button>I am a Button!</Button>
      <IconMastodon />
      <IconLinkedin />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
