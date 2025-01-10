import { styled } from "restyle";

const Heading = styled("h1", {
  fontSize: "3rem",
  fontWeight: 900,
});

const Paragraph = styled("p", {
  fontSize: "1.2rem",
  letterSpacing: "1px",
});

const Text = styled("p", {
  fontSize: "1.2rem",
  margin: 0,
  padding: 0,
});

export default function Home() {
  return (
    <div>
      <Heading>Home</Heading>
      <Paragraph>Paragraph</Paragraph>
      <Text>Text</Text>
    </div>
  );
}
