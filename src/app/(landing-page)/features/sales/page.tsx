'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SalesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/features/sales-and-order');
  }, [router]);

  return null;
}
