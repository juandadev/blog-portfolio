import Layout from "../components/Layout/Layout";
import PostItem from "../components/PostItem/PostItem";
import posts from "../utils/posts.json";

export default function Blog() {
  return (
    <Layout title="Blog">
      <h1 className="mb-5">Blog</h1>
      {posts.map((item) => (
        <PostItem item={item} key={item.slug} />
      ))}
    </Layout>
  );
}
