import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

let didMount = false;

export default function Post({ postName }) {
  const [post, setPost] = useState("");

  useEffect(() => {
    if (!didMount) {
      didMount = true;
      console.log("render");

      const fetchPost = async () => {
        await fetch(`/api/post/${postName}`)
          .then((response) => response.text())
          .then((markdownContent) => {
            setPost(markdownContent);
          });
      };

      fetchPost();
    }
  }, [postName]);

  return (
    <Layout title="Post">
      <ReactMarkdown>{post}</ReactMarkdown>
    </Layout>
  );
}
