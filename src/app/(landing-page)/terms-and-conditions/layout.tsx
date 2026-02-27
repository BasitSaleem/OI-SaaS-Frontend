import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Owners Inventory',
  description:
    'Review the terms and conditions governing the use of Owners Inventory software, services, subscriptions, and platform access.',
  publisher: 'Owners Inventory',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ownersinventory.com/terms-and-conditions',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
