import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import memoji from "../../assets/images/memoji.png";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import ArrowRight from "../../components/Icons/ArrowRight";
import { calculateRelativeDate } from "../../utils";
import posts from "../../utils/posts.json";
import PostItem from "../../components/PostItem/PostItem";

import s from "./Home.module.scss";

const filteredPosts = posts.slice(0, 7);

export default function Home() {
  return (
    <Layout title="Juanda Martinez">
      <Row className={`mb-4 ${s.info_container}`}>
        <Col className={`mb-4 ${s.info_text}`} xs={12} md={8}>
          <h1 className={`${s.info_highlight}`}>Hola! Soy Juanda 👋🏻</h1>
          <h2 className={s.info_2}>Desarrollador web</h2>
        </Col>
        <Col xs={12} md={4} className={`${s.image_container}`}>
          <div className={s.memoji_container}>
            <Image width={125} height={163} src={memoji} alt="Memoji avatar" />
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <p>
            Tengo {calculateRelativeDate("1997-02-27")} años de edad y me
            especializo en Typescript, React, Node y últimamente enfocado en web
            performance.{" "}
            <Link href="/about">
              Saber más <ArrowRight size={22} className={s.arrow} />
            </Link>
          </p>
        </Col>
      </Row>
      <Row className={s.posts_container}>
        <Col xs={12}>
          <h2 className={`mb-4 ${s.info_2}`}>Últimos posts</h2>
          <hr />
        </Col>
        {filteredPosts.map((item) => (
          <PostItem item={item} key={item.slug} />
        ))}
      </Row>
    </Layout>
  );
}
