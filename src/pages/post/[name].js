import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import s from "../../styles/Post.module.scss";

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
      <div {...rest} className={s.code}>
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
        .then((data) => {
          setPost(data);
        });
    }
  }, [router.query.name, router.isReady]);

  return (
    <Layout title={post.metadata?.title || "Post"}>
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </Layout>
  );
}
