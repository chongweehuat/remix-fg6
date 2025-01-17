export {};

declare global {
  interface Window {
    ENV: {
      CMSPATH: string;
      CMSDATA: "draft" | "published" | undefined;
      STORYBLOK_ACCESS_TOKEN: string;
    };
  }
}
