class EnvironmentValueGetter {
  static getApiServerBaseUrl(): string | undefined {
    return process.env.NEXT_API_SERVER_BASE_URL;
  }
}

export default EnvironmentValueGetter;
