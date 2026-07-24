import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogData, getBlogById } from "@/constant/blogData/blogData";
import BlogDetailHero from "@/components/pages/blog-detail/BlogDetailHero";
import BlogDetailBody from "@/components/pages/blog-detail/BlogDetailBody";
import BlogRelatedTopics from "@/components/pages/blog-detail/BlogRelatedTopics";
import FaqSection from "@/components/pages/landing-page/FAQSection";
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

  const isStaging = process.env.NEXT_PUBLIC_APP_ENV === "staging";

  return {
    title: `${blog.heading} | Owners Inventory`,
    description: blog.blogOverview.slice(0, 160),
    alternates: {
      canonical: `https://ownersinventory.com/resources/blog/${blog.id}`,
    },
    robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
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
        // description={blog.blogOverview}
        publishDate={blog.date}
        readingTime={blog.totalRead}
        views="4.5k views"
        authorName={blog.author}
        authorAvatar={blog.authorAvatar ?? blog.blogImg}
        authorRole={blog.authorRole ?? "Author"}
      />

      <BlogDetailBody data={blog} />

      {blog.relatedTopicIds && (
        <BlogRelatedTopics
          relatedTopicIds={blog.relatedTopicIds}
          currentId={blog.id}
        />
      )}

      {blog.faqs && blog.faqs.length > 0 && (
        <div className="mt-16 lg:mt-24">
          <FaqSection
            faqs={blog.faqs}
            heading="Frequently Asked Questions"
            paragraph="Quick answers to the most common questions about this topic. Need more detail? Our team is ready to help."
            showButton
          />
        </div>
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
