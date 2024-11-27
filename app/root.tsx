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
import { storyblokInit, apiPlugin, getStoryblokApi  } from "@storyblok/react";
import { isPreview } from "~/utils/isPreview";
import getData from "~/utils/getData";
import XTag from "./components/XTag";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import {storyData, storyContent, storyStyle} from "./utils/storyData";
import Text from "./components/blocks/text";
import Textarea from "./components/blocks/textarea";
import RichText from "./components/blocks/richtext";
import Asset from "./components/blocks/asset";
import Link from "./components/blocks/link";
import Feature from "./components/blocks/feature";

const components = {text:Text,textarea:Textarea,richtext:RichText,asset:Asset,link:Link,feature:Feature};

storyblokInit({
  accessToken: "9pCgOUNA8hs00g1hKG8V9wtt",
  use: [apiPlugin],
  components,
  bridge: isPreview(),
});

export const loader = async ({ params, request }:any) => {
  const {language, sbLanguage} = getCurrentLanguage(request);
  // console.log("root loader lang",lang);

  const settings=await getData('finexusgroup/settings','en');
  const header=await getData('finexusgroup/header',sbLanguage);
  const footer=await getData('finexusgroup/footer',sbLanguage);
  
  return {
    language,
    settings,
    header,
    footer
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { settings, header, footer }:any = useLoaderData();
  //console.log(settings);
  const setting = storyContent(settings,"global");
  const styleGlobal = storyStyle(settings,"global");
  return (
    <html lang="en">
      <head>
        <title>{setting.siteTitle.content}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={setting.favicon150.asset.filename} sizes="32x32" type="image/png" />
        <link rel="icon" href={setting.favicon300.asset.filename} sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href={setting.favicon300.asset.filename} sizes="180x180" />
        <Meta />
        <Links />
      </head>
      <body>
      <XTag styleClass="bg-white" cmsData={styleGlobal.wrapper} cmsDataRef="styleGlobal.wrapper">
        <Header blok={{header,settings}} />
          {children}
          <ScrollRestoration />
          <Scripts />
        <Footer blok={{footer}} />    
      </XTag>
      </body>
    </html>
  );
}

export default function App() {
  // console.log("App");
  return <Outlet />;
}

