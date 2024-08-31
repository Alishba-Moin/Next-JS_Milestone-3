import Link from "next/link";
import {Blogs} from "../components/blog"


export default function BlogsPage() {
  return (
    <main className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center">Latest Blogs</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogs.map((blog) => (
          <li
            key={blog.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-6"
          >
            <Link
              href={`/blogs/${blog.id}`}
              className="text-teal-700 text-2xl font-bold hover:text-teal-900 transition-colors duration-300 block mb-4"
            >
              {blog.title}
            </Link>
            <p className="text-gray-600 text-base leading-relaxed">
              {blog.content.slice(0, 150)}{blog.content.length > 150 ? '...' : ''}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
