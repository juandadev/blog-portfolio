import React from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import memoji from "../../assets/images/memoji.png";
import s from "./Home.module.scss";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const mockData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export default function Home() {
  return (
    <Layout title="Juanda Martinez">
      <Row className={`mb-4 ${s.info_container}`}>
        <Col className={`mb-4 ${s.info_text}`} xs={12} md={8}>
          <h1 className={`${s.info_highlight}`}>Hola! Soy Juanda 👋🏻</h1>
          <h2>un desarrollador web</h2>
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
      <Row className="mb-3">
        <Col>
          <p>
            Creo aplicaciones web que me gusta consumir, comparto conocimientos
            y experiencias a través de mi blog.{" "}
            <Link href="/about">Saber más</Link>
          </p>
        </Col>
      </Row>
      <Row className={s.posts_container}>
        <Col xs={12}>
          <h2 className="mb-4">Últimos posts</h2>
          <hr />
        </Col>
        {mockData.map((item) => (
          <Col xs={12} key={item.id}>
            <Card className={s.card_container}>
              <Card.Body>
                <Card.Title className={s.card_title}>Card Title</Card.Title>
                <Card.Subtitle className={`mb-2 text-muted ${s.card_subtitle}`}>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text className={s.card_text}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
