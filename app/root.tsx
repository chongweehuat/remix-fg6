import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { getCurrentLanguage } from "./utils/langs";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import getData from "~/utils/getData";
import XTag from "./components/XTag";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { storyData, storyContent, storyStyle } from "./utils/storyData";
import Text from "./components/blocks/text";
import Textarea from "./components/blocks/textarea";
import RichText from "./components/blocks/richtext";
import Asset from "./components/blocks/asset";
import Link from "./components/blocks/link";
import Feature from "./components/blocks/feature";

const components = {
  text: Text,
  textarea: Textarea,
  richtext: RichText,
  asset: Asset,
  link: Link,
  feature: Feature,
};

const accessToken = typeof window === "undefined"
  ? process.env.STORYBLOK_ACCESS_TOKEN
  : window.ENV.STORYBLOK_ACCESS_TOKEN

console.log("acessToken:",accessToken);
  
storyblokInit({
  accessToken, 
  use: [apiPlugin],
  components,
  bridge: true,
});

export const loader = async ({ params, request }: any) => {
  const { language, sbLanguage } = getCurrentLanguage(request);
  const CMSPATH = process.env.CMSPATH; // Retrieve CMS path from environment variables

  try {
    // Parallel data fetching
    const [settings, header, footer] = await Promise.all([
      getData(`${CMSPATH}/settings`, "en"),
      getData(`${CMSPATH}/header`, sbLanguage),
      getData(`${CMSPATH}/footer`, sbLanguage),
    ]);

    return { env: {
      STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
      CMSPATH: process.env.CMSPATH,
    },language, settings, header, footer };
  } catch (error) {
    throw new Response("Failed to load data", { status: 500 });
  }
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { env,language, settings, header, footer }: any = useLoaderData();

  const setting = storyContent(settings, "global");
  const styleGlobal = storyStyle(settings, "global");

  return (
    <html lang={language || "en"}>
      <head>
        <title>{setting?.siteTitle?.content || "Default Title"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Safeguards for undefined favicon */}
        <link
          rel="icon"
          href={setting?.favicon150?.asset?.filename || "/default-favicon-32.png"}
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href={setting?.favicon300?.asset?.filename || "/default-favicon-192.png"}
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={setting?.favicon300?.asset?.filename || "/default-favicon-180.png"}
          sizes="180x180"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <XTag styleClass="bg-white" cmsData={styleGlobal.wrapper} cmsDataRef="styleGlobal.wrapper">
          <Header blok={{ header, settings }} />
          {children}
          <ScrollRestoration />
          <Scripts />
          <Footer blok={{ footer }} />
        </XTag>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
