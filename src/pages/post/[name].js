import { default as PostPage } from "@/views/Post/Post";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return <PostPage postName={router.query.name} />;
}
