import { readdirSync } from "fs";
import { join } from "path";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post, metadata } = await import(`../../../../content/${slug}.mdx`);
    console.log(`========>`, Post);

    return (
      <div>
        <h1>{metadata.title}</h1>
        <p>Date: {metadata.date}</p>
        <Post />
      </div>
    );
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return <div>Post not found</div>;
  }
}

export function generateStaticParams() {
  const contentDir = join(process.cwd(), "content");
  try {
    const files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => ({ slug: file.replace(".mdx", "") }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export const dynamicParams = false;
