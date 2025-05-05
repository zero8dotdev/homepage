import React from "react";
import Link from "next/link";
import Image from "next/image"; // For optimized image handling

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  image?: string; // Optional image URL
}

export default function BlogCard({ slug, title, date, image }: BlogCardProps) {
  console.log(`=============> ${image} ${slug} ${title} ${date}`);
  return (
    <Link href={`/blog/${slug}`} className="no-underline max-h-full col-span-full">
      <div className="bg-black text-white border border-gray-200 rounded-xl p-6 mb-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer max-w-full">
        {image ? (
          <div className="relative w-full h-96 mb-4">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
        ) : (
          <div className="w-full h-40 mb-4 bg-gray-700 rounded-t-xl flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        <h2 className="mb-2 text-xl font-semibold text-gray-300">{title}</h2>
        <p className="text-gray-400">{date}</p>
      </div>
    </Link>
  );
}
