import Head from "next/head";
import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import s from "./Layout.module.scss";
import Elipse from "../Icons/Elipse";
import Link from "next/link";
import Twitter from "../Icons/Twitter";
import Linkedin from "../Icons/Linkedin";
import Github from "../Icons/Github";
import Devto from "../Icons/Devto";

export default function Layout({ children, title }) {
  const getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();

    return currentYear;
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Juanda's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={s.page_container}>
        <Header />
        <main className={s.main_container}>{children}</main>
        <footer className={s.footer_container}>
          <div className={`pt-5 ${s.footer_info}`}>
            <Link href="/" className={s.footer_icon}>
              <Elipse size={16} stroke={4} white />
              <strong>Juanda</strong>
            </Link>
            <p>Desarrollador web</p>
          </div>
          <div className={`mt-4 mb-4 ${s.footer_nav}`}>
            <Link href="/about">Acerca de mí</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contacto</Link>
          </div>
          <hr className="mb-4" />
          <div className={`pb-5 ${s.links_container}`}>
            <p>
              &copy; {getCurrentYear()} Creado con 💚 por Juan Daniel Martinez
            </p>
            <div className={s.links}>
              <Link href="https://twitter.com/juandadotdev">
                <Twitter size={22} />
              </Link>
              <Link href="https://www.linkedin.com/in/juandadev/">
                <Linkedin size={22} />
              </Link>
              <Link href="https://github.com/juandadev">
                <Github size={22} />
              </Link>
              <Link href="https://dev.to/juandadev">
                <Devto size={22} />
              </Link>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
