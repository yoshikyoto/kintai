'use client';

import Link from 'next/link';
import environmentValueGetter from '@/utils/EnvironmentValueGetter';

export default function Home() {
  const googleApiKey = environmentValueGetter.getGoogleClientId() || "";
  const frontendBaseUrl = environmentValueGetter.getFrontendBaseUrl() || "";
  const redirectUrl = frontendBaseUrl + "/login/google/complete";

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
