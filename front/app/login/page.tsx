import Link from 'next/link';

export default function Home() {
  const googleApiKey = "594257163006-vjl4qre2a74uokpv290nuk9smqh3ium5.apps.googleusercontent.com";
  const redirectUrl = "http://localhost:3000/login/google/complete";

  return (
    <>
      <h1>ログイン</h1>
      <a href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleApiKey}&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}&response_type=code&scope=openid%20profile%20email`}>
        Googleでログイン
      </a>
    </>
  );
}
