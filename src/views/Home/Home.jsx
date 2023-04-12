import React from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import memoji from "../../assets/images/memoji.png";
import s from "./Home.module.scss";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import ArrowRight from "@/components/Icons/ArrowRight";

const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

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
            <Link href="/about" className="link">
              Saber más <ArrowRight size={22} className={s.arrow} />
            </Link>
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
              <Card.Img
                className={s.card_image}
                src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"
              />
              <Card.Body className={s.card_body}>
                <Card.Text className={s.card_subtitle}>React</Card.Text>
                <Card.Text className={s.card_title}>Card Title</Card.Text>
                <Card.Text className={`text-muted ${s.card_subtitle}`}>7 Dec, 2022</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
