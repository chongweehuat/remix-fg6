export {};

declare global {
  interface Window {
    ENV: {
      CMSPATH: string;
      STORYBLOK_ACCESS_TOKEN: string;
    };
  }
}
