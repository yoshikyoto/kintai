import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>ログイン</h1>
      <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_DUMMY_CLIENT_ID&redirect_uri=${encodeURIComponent(
        '/login/google/complete'
      )}&response_type=code&scope=openid%20profile%20email`}>
        Googleでログイン
      </a>
    </>
  );
}
