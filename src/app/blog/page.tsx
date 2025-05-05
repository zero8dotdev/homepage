import { readdirSync } from "fs";
import { join } from "path";
import BlogCard from "@/app/_components/BlogCard";

export default async function BlogIndex() {
  const contentDir = join(process.cwd(), "content");
  console.log("Content directory:", contentDir);
  let files: string[] = [];

  try {
    files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    console.log("Found files:", files);
  } catch (error) {
    console.error("Error reading content directory:", error);
    return <div>No posts found. Check if the content directory exists.</div>;
  }

  const posts = await Promise.all(
    files.map(async (file) => {
      try {
        const { metadata } = await import(`@/../content/${file}`);
        console.log(`Imported metadata for ${file}:`, metadata);
        return { slug: file.replace(".mdx", ""), ...metadata };
      } catch (error) {
        console.error(`Error importing ${file}:`, error);
        return null;
      }
    })
  );

  const validPosts = posts.filter((post) => post !== null);

  return (
    <div className="col-span-full">
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#333" }}>
        Blog Posts
      </h1>
      {validPosts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            padding: "0 1rem",
          }}
        >
          {validPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      ) : (
        <p>No valid posts found.</p>
      )}
    </div>
  );
}
