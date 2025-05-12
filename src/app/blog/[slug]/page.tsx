// app/blog/[slug]/page.tsx
import { readdirSync } from "fs";
import { join } from "path";
import { Metadata } from "next";

// Define interface for metadata
interface PostMetadata {
  title: string;
  date: string;
  image?: string;
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  try {
    const { metadata } = await import(`../../../../content/${params.slug}.mdx`);
    return {
      title: metadata.title,
      description: `Blog post about ${metadata.title}`,
    };
  } catch (error) {
    console.error(`Error loading metadata for ${params.slug}:`, error);
    return {
      title: 'Blog Post',
      description: 'Blog post content',
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { default: Post, metadata } = await import(
      `../../../../content/${params.slug}.mdx`
    );
    
    return (
      <div className="col-start-2 col-end-4 bg-transparent p-8 rounded-lg shadow-xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4">{metadata.title}</h1>
        <p className="text-gray-400 mb-8">Date: {metadata.date}</p>
        
        {/* If there's a cover image, display it */}
        {metadata.image && (
          <div className="relative w-full h-72 mb-8 rounded-xl overflow-hidden">
            <img 
              src={metadata.image} 
              alt={`Cover image for ${metadata.title}`}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        {/* No additional wrapper classes that might interfere with styling */}
        <article>
          <Post />
        </article>
      </div>
    );
  } catch (error) {
    console.error(`Error loading post ${params.slug}:`, error);
    return (
      <div className="col-start-2 col-end-4 bg-gray-900 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-gray-400">
          Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
        </p>
      </div>
    );
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