import Head from "next/head";
import { default as Index } from "../views/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juanda Martinez | Software Engineer</title>
        <meta name="description" content="Juanda's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Index />
      </Container>
    </>
  );
}
