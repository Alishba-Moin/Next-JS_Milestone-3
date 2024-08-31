import Comments from "@/app/components/comments/page";
import { notFound } from "next/navigation";
import { Blogs } from "@/app/components/blog";

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = Blogs.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">{post.title}</h1>
      <article className="bg-white border border-gray-300 rounded-lg shadow-md p-8 mb-12">
        <p className="text-lg text-gray-800 leading-relaxed">{post.content}</p>
      </article>
      <section className="bg-white border border-gray-300 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comments</h2>
        <Comments />
      </section>
    </main>
  );
}
