import { blogs } from "@/app/data/blogs";

interface BlogProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogDetail({ params }: BlogProps) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return <h1>404 - Blog Not Found</h1>;
  }

  return (
    <div className="min-h-screen  ml-9 p-10">
      <img src={blog.image} alt={blog.title} className="w-[1200px] h-[500px] object-cover mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-4">
        {blog.date} - {blog.author}
      </p>
      <p className="text-lg leading-8">{blog.summary}</p>
      <p className="text-sx leading-8 mt-3 ">{blog.content}</p>
      <div className="md:w-[500px] w-full mx-auto space-y-4">
        <h1 className="mt-3 ml-[23%] font-bold text-2xl">Add Commet</h1>
        <div className="flex flex-col ">
        <input type="text" placeholder="Add a Comment" className="p-5 border border-gray-400 "/>
        <button className="mt-3 bg-pink-400 p-2 text-xl font-bold">Add Comment</button>
        </div>
      </div>
    </div>
  );
}
