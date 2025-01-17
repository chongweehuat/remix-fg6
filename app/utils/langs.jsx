import { useLocation } from "@remix-run/react";
import { getPreferredLanguage } from "./cookies";
import { parseCookies } from "nookies";

const CMSPATH = typeof window === "undefined" 
? process.env.CMSPATH || "finexusgroup"
: window.ENV.CMSPATH|| "finexusgroup";

const languages = ["en-gb","ms-my","zh-cn","ta-my"]; // List of languages your app supports
const storyblokLanguage = {
  "en": "en-gb",
  "ms": "ms-my",
  "zh": "zh-cn",
  "ta": "ta-my",   
  "en-gb": "en-gb", 
  "ms-my": "ms-my", 
  "zh-cn": "zh-cn",
  "ta-my": "ta-my",
}

const useCurrentLanguage = () => {
  const location = useLocation(); // Get info about the current webpage
  const currentPath = location.pathname; // Find out the current webpage address

  const cookies = parseCookies();
  const preferredLanguage = cookies.preferredLanguage || "en-gb";
  // Extract the first part of the path (language code) and match it to storyblokLanguage
  const pathParts = currentPath.split("/").filter(Boolean); // Remove empty strings
  const languageFromPath = pathParts[0]; // Get the first part of the path
  const currentLanguage = storyblokLanguage[languageFromPath]
    ? languageFromPath
    : preferredLanguage || "en-gb";

  // Give back the webpage address and the language we found
  return { currentPath, currentLanguage };
};

const getSlug = (param) => {
  
  let slug = param ?? "home";
  let pathParts = slug.split("/");
  let language = pathParts[1];

  if (language in storyblokLanguage) {
    slug= slug.replace("/"+language+"/",""); 
  }
  slug= slug.replace(`${CMSPATH}/`,"");
  
  return slug;
}

const getCurrentLanguage = (request) => {
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  let language = pathParts[1];

  if (!Object.keys(storyblokLanguage).includes(language)) {
    const preferredLanguage = getPreferredLanguage(request);
    //console.log("getCurrentLanguage Preferred Language from Cookie:", preferredLanguage);

    language = preferredLanguage || "en-gb"; // Fallback to "en-gb"
  }
  
  return {language, sbLanguage: storyblokLanguage[language]};
}



const languagesName ={
  "en-gb": "English (UK)", 
  "ms-my": "Bahasa Melayu", 
  "zh-cn": "简体中文",
  "ta-my": "தமிழ்", 
};

const getTransLink = (slug, language) => {
  let transLink = "";
  if (slug === "/") {
    transLink = language === "en-gb" ? slug : `/${language}`;
  }else{
    transLink = language === "en-gb" ? `/${slug}` : `/${language}/${slug}`;
  }
  // console.log(slug,language,transLink);
  return transLink;
}

export { getTransLink,getSlug, languages, languagesName, storyblokLanguage, useCurrentLanguage, getCurrentLanguage };
