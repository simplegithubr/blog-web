import Link from "next/link";
import { blogs } from "@/app/data/blogs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-center py-10">
      <h1 className="text-4xl font-bold mb-8">Welcome to Artist Blog Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-blue-600 font-bold">{blog.category}</h2>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <Link href={`/blog/${blog.id}`}>
                <h1 className="text-blue-500 mt-2 inline-block">Read More</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
