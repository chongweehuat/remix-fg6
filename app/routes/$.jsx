import { useLoaderData } from "@remix-run/react";
import getData from "../utils/getData";
import HomePage from "../pages/HomePage";
import News from "../pages/News";
import LanguageSelector from "../pages/LanguageSelector";
import { languages, getCurrentLanguage } from "../utils/langs";
import { useSearchParams } from "@remix-run/react";

export const loader = async ({ params, request }) => {

  let slug = params["*"] ?? "home";

  // Extract the language from the URL
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  const {language, sbLanguage} = getCurrentLanguage(request);

  // If the language is not one of the supported languages, it's 'en' and the first part of the URL is part of the slug

  if (languages.includes(language)) {
    // Remove the language part from the slug
    if (pathParts[0] === "") {
      pathParts.shift(); // Remove the first empty string from the array
    }
    pathParts.shift(); // Remove the language part from the array
  }

  slug = pathParts.join("/") || slug;
  slug = slug === "/" || slug === "/home" || slug === language ? "home" : slug;

  slug= slug.replace("finexusgroup/","");
  
  const settings=await getData('finexusgroup/settings','en');
  const data = await getData('finexusgroup/'+slug, sbLanguage);
  
  switch (slug) {
    case 'home':
      const newsHighlights = await getData('finexusgroup/newsroom/highlights', language);
      data.contents.forEach(item => {
        
        if (item.name === "highlights") {
          
          item.content.push({name:"newshighlights",items:newsHighlights.items});
        }
      });
    case 'news':
      const news = await getData('finexusgroup/newsroom/all-news', language);
      data.news=news;
  }
  return { language, slug, data, settings };
}

export default function Index() {
  const { language, slug, data, settings } = useLoaderData();
  const [searchParams] = useSearchParams();
  const showdata = searchParams.get("showdata");

  const renderContent = () => {
    if (slug === "home") {
      return <HomePage blok={{ data, settings }} />;
    }
    if (slug === "news") {
      return <News blok={{ data, settings }} />;
    }
    return <p>Page not found</p>;
  };

  return (
    <>
      {renderContent()}
      <LanguageSelector slug={slug} />
      {showdata?<div>
      <pre style={{ fontFamily: "monospace", background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>:<></>}
    </>
  );
}  