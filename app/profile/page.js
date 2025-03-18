'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This page is also rendered client-side.</p>

      <Link href="/">Go back to Home</Link>
    </div>
  );
}
