import Layout from "../components/Layout/Layout";
import PostItem from "../components/PostItem/PostItem";
import posts from "../utils/posts.json";

import s from "../styles/Blog.module.scss";

export default function Blog() {
  return (
    <Layout title="Blog">
      <h1 className={`mb-5 ${s.title}`}>Blog</h1>
      {posts.map((item) => (
        <PostItem item={item} key={item.slug} />
      ))}
    </Layout>
  );
}
