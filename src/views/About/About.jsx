import React from "react";
import Layout from "@/components/Layout/Layout";
import { Col, Row } from "react-bootstrap";
import s from "./About.module.scss";

export default function About() {
  const calculateMyAge = () => {
    const birthDate = new Date("1997-02-27"); // replace with your birth date
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age;
  };

  return (
    <Layout title="Acerca de mí">
      <Row>
        <Col>
          <h1 className={`${s.title}`}>Acerca de mí</h1>
          <hr />
          <p>
            Mi nombre es Juan Daniel Martinez, tengo {calculateMyAge()} años y
            soy Ingeniero en Sistemas Computacionales, desde México 🇲🇽
          </p>
          <p>
            Como desarrollador web con 4 años de experiencia, estoy dedicado a
            crear aplicaciones web centradas en el usuario que sean tanto
            hermosas como funcionales. A través de mi blog, comparto mis ideas
            sobre las últimas tendencias y mejores prácticas en el desarrollo
            web, y espero inspirar a otros a crear experiencias web increíbles.
          </p>
          <hr />
          <p>
            En los últimos años, he tenido la oportunidad de desempeñarme como
            desarrollador frontend en Globant 💚 lo que ha supuesto un gran
            salto en mi carrera profesional. En este tiempo, me he esforzado por
            mejorar mis habilidades de comunicación y trabajo en equipo,
            ampliando mi zona de confort más allá de la programación.
          </p>
          <p>
            En mi tiempo libre, disfruto pensando en temas para escribir en mi
            blog y me reto a explicarlos de la mejor manera para mejorar mis
            habilidades técnicas. Además, amo los videojuegos de
            aventura y estrategia, y tengo una obsesión con los Legos.
          </p>
        </Col>
      </Row>
    </Layout>
  );
}
