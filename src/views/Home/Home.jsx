import React from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import memoji from "../../assets/images/memoji.png";
import s from "./Home.module.scss";
import Header from "@/components/Header/Header";

const mockData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

export default function Home() {
  return (
    <>
      <Header />
      <Row className={`mb-4 ${s.info_container}`}>
        <Col xs={12} md={8}>
          <h1 className="text-center">Hola, Soy Juanda 👋🏻</h1>
          <h2 className="text-center">un desarrollador web</h2>
        </Col>
        <Col xs={12} md={4} className={`${s.image_container}`}>
          <div className={s.memoji_container}>
            <Image
              width={125}
              height={163}
              src={memoji}
              alt="Imagen de caricatura alusiva al autor"
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p className="text-center">
            Con 4 años de experiencia, estoy dedicado a crear aplicaciones web
            centradas en el usuario que sean tanto hermosas como funcionales. A
            través de mi blog, comparto mis experiencias e ideas contigo, donde
            cubro temas que van desde el desarrollo frontend hasta las mejores
            prácticas para construir aplicaciones web, y espero inspirar a otros
            a crear experiencias web increíbles.
          </p>
          <p className="text-center">
            Cuando no estoy programando, me gusta jugar videojuegos, y tengo una
            obsesión con los Legos 💚
          </p>
        </Col>
      </Row>
      <Row>
        {mockData.map((item) => (
          <Col xs={12} sm={6} lg={4} key={item.id}>
            <Card className={s.card_container}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
