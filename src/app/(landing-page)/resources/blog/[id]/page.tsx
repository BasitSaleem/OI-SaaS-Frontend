import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogData, getBlogById } from "@/constant/blogData/blogData";
import BlogDetailHero from "@/components/pages/blog-detail/BlogDetailHero";
import BlogDetailBody from "@/components/pages/blog-detail/BlogDetailBody";
import BlogDetailTestimonial from "@/components/pages/blog-detail/BlogDetailTestimonial";
import BlogRelatedTopics from "@/components/pages/blog-detail/BlogRelatedTopics";
import IndustriesCallToAction from "@/components/pages/industries-page/IndustriesCallToAction";

export function generateStaticParams() {
  return blogData.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);
  if (!blog) return { title: "Blog Not Found | Owners Inventory" };
  return {
    title: `${blog.heading} | Owners Inventory`,
    description: blog.blogOverview.slice(0, 160),
    alternates: {
      canonical: `https://ownersinventory.com/resources/blog/${blog.id}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) notFound();

  return (
    <>
      <BlogDetailHero
        title={blog.heading}
        publishDate={blog.date}
        readingTime={blog.totalRead}
        views="2,340 views"
        authorName={blog.author}
        authorAvatar={blog.authorAvatar ?? blog.blogImg}
        authorRole={blog.authorRole ?? "Author"}
      />

      <BlogDetailBody data={blog} />

      {blog.authorQuote && (
        <BlogDetailTestimonial testimonial={blog.authorQuote} />
      )}

      {blog.relatedTopicIds && (
        <BlogRelatedTopics
          relatedTopicIds={blog.relatedTopicIds}
          currentId={blog.id}
        />
      )}

      <div className="mt-16 lg:mt-24">
        <IndustriesCallToAction
          title="Optimize Your Inventory Today"
          description="Join thousands of businesses that have transformed their inventory management with Owners Inventory."
          ctaDesc="Get Started Free"
        />
      </div>
    </>
  );
}
