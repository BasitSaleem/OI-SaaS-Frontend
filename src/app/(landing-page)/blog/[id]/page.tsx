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
    title: blog.metaTitle || `${blog.heading} | Owners Inventory`,
    description: blog.metaDescription || blog.blogOverview.slice(0, 160),
    keywords: blog.keywords || [],
    alternates: {
      canonical: `https://ownersinventory.com/blog/${blog.id}`,
    },
    robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
  };
}

import Script from "next/script";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) notFound();

  const detailSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://ownersinventory.com/blog/${blog.id}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ownersinventory.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ownersinventory.com/blog" },
          { "@type": "ListItem", "position": 3, "name": blog.heading, "item": `https://ownersinventory.com/blog/${blog.id}` }
        ]
      },
      {
        "@type": "BlogPosting",
        "@id": `https://ownersinventory.com/blog/${blog.id}/#post`,
        "url": `https://ownersinventory.com/blog/${blog.id}`,
        "headline": blog.heading,
        "description": blog.metaDescription || blog.blogOverview.slice(0, 160),
        "datePublished": blog.date,
        "author": {
          "@type": "Person",
          "name": blog.author
        },
        "publisher": {
          "@id": "https://ownersinventory.com/#organization"
        },
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://ownersinventory.com/blog/${blog.id}/#webpage`
        }
      },
      {
        "@type": "WebPage",
        "@id": `https://ownersinventory.com/blog/${blog.id}/#webpage`,
        "url": `https://ownersinventory.com/blog/${blog.id}`,
        "name": blog.metaTitle || `${blog.heading} | Owners Inventory`,
        "description": blog.metaDescription || blog.blogOverview.slice(0, 160),
        "isPartOf": { "@id": "https://ownersinventory.com/#website" },
        "breadcrumb": { "@id": `https://ownersinventory.com/blog/${blog.id}/#breadcrumb` },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://ownersinventory.com/#organization",
        "name": "Owners Inventory",
        "url": "https://ownersinventory.com",
        "description": "Owners Inventory is an all-in-one business management platform for retail, wholesale, manufacturing, and ecommerce businesses. It combines POS, inventory management, purchasing, ecommerce, HR, and finance in one system.",
        "foundingDate": "2025",
        "areaServed": "Worldwide",
        "sameAs": [
          "https://www.facebook.com/ownersinventory/",
          "https://www.instagram.com/ownersinventory/",
          "https://www.linkedin.com/company/owners-inventory/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "sales@ownersinventory.com",
          "availableLanguage": "English"
        }
      },
      ...(blog.faqs && blog.faqs.length > 0 ? [
        {
          "@type": "FAQPage",
          "@id": `https://ownersinventory.com/blog/${blog.id}/#faq`,
          "mainEntity": blog.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ] : [])
    ]
  };

  return (
    <>
      <Script
        id={`blog-detail-schema-${blog.id}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(detailSchema) }}
      />

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

    </>
  );
}
