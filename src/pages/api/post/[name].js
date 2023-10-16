import { splitMetadataAndContent } from "@/utils";
import { readFileSync } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { name } = req.query;
  const filePath = path.join(process.cwd(), `src/posts/${name}.md`);
  const markdownPost = readFileSync(filePath, "utf8");
  const postObject = splitMetadataAndContent(markdownPost);

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(postObject);
}
