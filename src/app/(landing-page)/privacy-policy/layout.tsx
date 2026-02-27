import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Owners Inventory',
  description:
    'Learn how Owners Inventory collects, uses, and protects your personal and business data with secure, compliant privacy practices.',
  publisher: 'Owners Inventory',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ownersinventory.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
