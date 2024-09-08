import Layout from '../components/Layout/Layout'
import PostItem from '../components/PostItem/PostItem'
import posts from '../utils/posts.json'

import s from '../styles/Blog.module.scss'
import { Col, Pagination, Row } from 'react-bootstrap'

export default function Blog() {
  return (
    <Layout title="Blog">
      <Row>
        <h1 className={`mb-5 ${s.title}`}>Blog</h1>
        <hr />
      </Row>
      <Row>
        {posts.map((item) => (
          <Col xs={12} key={item.slug} className="mb-4">
            <PostItem item={item} />
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Pagination className="justify-content-center mb-0">
          <Pagination.Item active={true} style={{ cursor: 'pointer' }}>
            1
          </Pagination.Item>
        </Pagination>
      </Row>
    </Layout>
  )
}
