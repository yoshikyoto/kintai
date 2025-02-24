'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GoogleLoginComplete() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      fetch(process.env.NEXT_SERVER_API_URL + '/login/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle successful response
            console.log('Login successful');
            router.push('/'); // Redirect to home page or any other page
          } else {
            // Handle error response
            console.error('Login failed');
          }
        })
        .catch((error) => {
          // Handle network error
          console.error('Network error:', error);
        });
    }
  }, [searchParams, router]);

  return (
    <>
      <h1>Google ログイン完了</h1>
      <p>Google ログインが完了しました。このページからバックエンドに情報を送信します。</p>
    </>
  );
}
