import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //   get the file data
  const posts = markdownPosts.map((fileName) => {
    const fullPath = folder + fileName;
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterData = matter(fileContent);
    const { data } = matterData;

    return {
      title: data.title,
      prep_time: data.prep_time,
      cook_time: data.cook_time,
      bio: data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}
