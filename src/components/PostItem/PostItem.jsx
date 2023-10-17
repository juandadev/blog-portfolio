import { format } from "date-fns";
import Link from "next/link";
import { Card, Col } from "react-bootstrap";

import s from './PostItem.module.scss';

export default function PostItem({ item }) {
  const renderLink = (item) => {
    if (item.external) {
      return (
        <a
          className={s.postLink}
          href={item.external}
          referrerPolicy="no-referrer"
        >
          {item.title}
        </a>
      );
    }

    return (
      <Link className={s.postLink} href={`/post/${item.slug}`}>
        {item.title}
      </Link>
    );
  };

  return (
    <Col xs={12}>
      <Card className={s.card_container}>
        <Card.Img className={s.card_image} src={item.cover_image} />
        <Card.Body className={s.card_body}>
          <Card.Text className={s.card_subtitle}>{item.tags}</Card.Text>
          <Card.Text className={s.card_title}>{renderLink(item)}</Card.Text>
          <Card.Text className={`text-muted ${s.card_subtitle}`}>
            {format(new Date(item.date), "PP")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
