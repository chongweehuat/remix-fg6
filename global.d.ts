export {};

declare global {
  interface Window {
    env: {
      CMSPATH: string;
      STORYBLOK_ACCESS_TOKEN: string;
    };
  }
}
