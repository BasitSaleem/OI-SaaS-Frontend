'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed');

    if (isChunkError) {
      window.location.reload();
    }
  }, [error]);

  return (
    <html>
      <body
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontFamily: 'sans-serif',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <p style={{ color: '#666', fontSize: '16px' }}>Something went wrong.</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 24px',
            background: '#795CF5',
            color: '#fff',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          Reload page
        </button>
      </body>
    </html>
  );
}
