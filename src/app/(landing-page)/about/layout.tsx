import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Owners Inventory | Our Mission & Vision',
  description:
    'Discover the story behind Owners Inventory, our mission to simplify business operations, and how we help retailers, wholesalers, and manufacturers grow.',
  publisher: 'Owners Inventory',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ownersinventory.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
