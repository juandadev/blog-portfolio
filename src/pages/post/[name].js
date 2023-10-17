import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

import s from "../../styles/Post.module.scss";
import { format } from "date-fns";

const customComponents = {
  h1(props) {
    return <h1 className={s.h1}>{props.children}</h1>;
  },
  h2(props) {
    return <h1 className={s.h2}>{props.children}</h1>;
  },
  h3(props) {
    return <h1 className={s.h3}>{props.children}</h1>;
  },
  h4(props) {
    return <h1 className={s.h4}>{props.children}</h1>;
  },
  h5(props) {
    return <h1 className={s.h5}>{props.children}</h1>;
  },
  h6(props) {
    return <h1 className={s.h6}>{props.children}</h1>;
  },
  li(props) {
    return <li className={s.list}>{props.children}</li>;
  },
  ul(props) {
    return <ul className={s.list}>{props.children}</ul>;
  },
  blockquote(props) {
    return <blockquote className={s.blockquote}>{props.children}</blockquote>;
  },
  img(props) {
    return (
      <img
        className={s.img}
        src={props.src}
        alt={props.alt}
        title={props.title}
      />
    );
  },
  code(props) {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        {...rest}
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        style={coldarkDark}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <div {...rest} className={`code ${s.code}`}>
        <code>{children}</code>
      </div>
    );
  },
};

export default function Post() {
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      fetch(`/api/post/${router.query.name}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [router.query.name, router.isReady]);

  return (
    <Layout title={post.metadata?.title || "Post"}>
      {Object.keys(post).length !== 0 ? (
        <>
          <div className={s.headingContainer}>
            <p className={s.headingTag}>{post.metadata?.tags}</p>
            <h1>{post.metadata?.title}</h1>
            <p className={s.headingText}>{post.metadata?.description}</p>
            <Image
              alt="Post cover photo"
              width={900}
              height={500}
              src={post.metadata?.cover_image}
              className={s.coverImage}
            />
            <div className={s.publish}>
              <p>Por {post.metadata?.author}</p>
              <p>Publicado el {format(new Date(post.metadata?.date), "P")}</p>
            </div>
          </div>
          <ReactMarkdown components={customComponents}>
            {post.content}
          </ReactMarkdown>
        </>
      ) : (
        "Loading..."
      )}
    </Layout>
  );
}
