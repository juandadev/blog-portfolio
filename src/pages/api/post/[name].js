import { readFileSync } from "fs";
import path from "path";

export default function handler(req, res) {
  const { name } = req.query;
  const filePath = path.join(process.cwd(), "posts", `${name}.md`);

  // const markdownPost = readFileSync(`./posts/${name}.md`, "utf-8");
  const markdownPost = readFileSync(filePath, "utf-8");

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(markdownPost);
}
