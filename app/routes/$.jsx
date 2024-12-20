import { useLoaderData } from "@remix-run/react";
import getData from "../utils/getData";
import { getPreviousAndNextBlogs } from "../utils/getData";
import HomePage from "../pages/HomePage";
import News from "../pages/News";
import NewsBlog from "../pages/NewsBlog";
import ContactUs from "../pages/ContactUs";
import Career from "../pages/Career";
import Accreditations from "../pages/Accreditations";
import RegulatoryCompliance from "../pages/RegulatoryCompliance";
import DataProcessor from "../pages/DataProcessor";
import LanguageSelector from "../pages/LanguageSelector";
import DigitalMoney from "../pages/DigitalMoney";
import MyXaaS from "../pages/MyXaaS";
import Arema from "../pages/Arema";
import AboutUs from "../pages/AboutUs";
import { getCurrentLanguage } from "../utils/langs";
import { useSearchParams } from "@remix-run/react";

const CMSPATH = process.env.CMSPATH || "finexusgroup"; // Fallback to "finexusgroup" if CMSPATH is undefined

export const loader = async ({ params, request }) => {
  let slug = params["*"] ?? "home";

  // Extract the language from the URL
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  const { language, sbLanguage } = getCurrentLanguage(request);

  // If the language is not one of the supported languages, it's 'en' and the first part of the URL is part of the slug
  pathParts = pathParts.filter((part) => part !== ""); // Remove empty strings
  if (pathParts[0] === language) pathParts.shift();

  slug = pathParts.join("/") || "home";
  slug = ["", "home", language].includes(slug) ? "home" : slug;
  slug = slug.replace(new RegExp(`^${CMSPATH}/`), ""); // Dynamically replace CMSPATH prefix

  let slugParts = slug.split("/");
  slug = slugParts[0];

  if(slug==="newsblogs")slug="news";

  // Fetch global settings and page-specific data
  const settings = await getData(`${CMSPATH}/settings`, "en");
  const data = await getData(`${CMSPATH}/${slug}`, sbLanguage);

  if (!settings || !data) {
    throw new Response("Failed to load data", { status: 500 });
  }

  let slugYear = "";
  let slugBlog = "";
 
  if (slug === "home") {
    for (const item of data.contents ?? []) {
      if (item.name === "highlights") {
        for (const element of item.content ?? []) {
          if (element.name === "Highlights List") {
            const newsHighlights = await Promise.all(
              (element.items ?? []).map(async (slug) => {
                const newsHighlight = await getData(`${CMSPATH}/newsblogs/${slug.text}`, language);
                if (newsHighlight) {
                  newsHighlight.slug = slug.text;
                  return newsHighlight;
                }
                return null;
              })
            );

            // Filter out any null responses
            item.content.push({
              name: "newshighlights",
              items: newsHighlights.filter(Boolean),
            });
          }
        }
      }
    }
  }

  if (slug === "news") {
    if (!slugParts[1] || slugParts[1].trim() === "") {
      const currentYear = new Date().getFullYear();
      slugYear = currentYear.toString();
    } else {
      slugYear = slugParts[1];
      if (slugParts[2]) {
        slugBlog = slugParts[2];
      }
    }

    if (slugBlog) {
      const news = await getData(`${CMSPATH}/newsblogs/${slugYear}/${slugBlog}`, language);
      data.PreviousAndNextBlogs = await getPreviousAndNextBlogs(slugBlog, slugYear, language);
      data.news = news;
    } else {
      const news = await getData(`${CMSPATH}/newsblogs/${slugYear}`, language, true);
      data.news = news;
      data.year = slugYear;
    }
  }

  return { language, slug, slugYear, slugBlog, data, settings };
};

export default function Index() {
  const { language, slug, slugYear, slugBlog, data, settings, error } = useLoaderData();
  const [searchParams] = useSearchParams();
  const showdata = searchParams.get("showdata");

  const renderContent = () => {
    if (error) {
      return <p>{error}</p>;
    }

    if (slug === "home") {
      return <HomePage blok={{ data, settings }} />;
    }
    if (slug === "news") {
      if (slugBlog) return <NewsBlog blok={{ data, settings }} />;
      else return <News blok={{ data, settings }} />;
    }
    if (slug === "career") {
      return <Career blok={{ data, settings }} />
    }
    if (slug === "contactus") {
      return <ContactUs blok={{ data, settings }} />
    }
    if(slug=== "accreditations"){
      return <Accreditations blok={{data,settings}} />
    }
    if(slug==="regulatorycompliance"){
      return <RegulatoryCompliance blok={{data,settings}} />
    }
    if(slug==="dataprocessor"){
      return <DataProcessor blok={{data,settings}} />
    }
    if(slug==="digitalmoney"){
      return <DigitalMoney blok={{data,settings}} />
    }
    if(slug==="myxaas"){
      return <MyXaaS blok={{data,settings}} />
    }
    if(slug==="arema"){
      return <Arema blok={{data,settings}} />
    }
    if(slug==="aboutus"){
      return <AboutUs blok={{data,settings}} />
    }
    return <p>Page not found</p>;
  };

  return (
    <>
      {renderContent()}
      <LanguageSelector />
      {showdata ? (
        <div>
          <pre
            style={{
              fontFamily: "monospace",
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      ) : null}
    </>
  );
}
