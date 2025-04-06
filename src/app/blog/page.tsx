import { readdirSync } from "fs";
import { join } from "path";

export default async function BlogIndex() {
  const contentDir = join(process.cwd(), "content");
  let files: string[] = [];

  // Read content directory
  try {
    files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  } catch (error) {
    console.error("Error reading content directory:", error);
    return (
      <div>
        No posts found. Please add some MDX files to the content directory.
      </div>
    );
  }

  // Import metadata for each post
  const posts = await Promise.all(
    files.map(async (file) => {
      try {
        // const { metadata } = await import(`@/content/${file.replace('.mdx', '')}`);
        const { metadata } = await import(`../../../content/${file}`);

        return { slug: file.replace(".mdx", ""), ...metadata };
      } catch (error) {
        console.error(`Error importing ${file}:`, error);
        return null; // Skip invalid files
      }
    })
  );

  const validPosts = posts.filter((post) => post !== null);

  return (
    <div>
      <h1>Blog Posts</h1>
      {validPosts.length > 0 ? (
        <ul>
          {validPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>
                {post.title} ({post.date})
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No valid posts found.</p>
      )}
    </div>
  );
}
