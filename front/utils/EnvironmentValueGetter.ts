class EnvironmentValueGetter {
  getApiServerBaseUrl(): string | undefined {
    return process.env.NEXT_PUBLIC_API_SERVER_BASE_URL;
  }

  getFrontendBaseUrl(): string | undefined {
    return process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;
  }

  getGoogleClientId(): string | undefined {
    return process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  }
}

const environmentValueGetter = new EnvironmentValueGetter();
export default environmentValueGetter;
