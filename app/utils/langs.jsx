import { useLocation } from "@remix-run/react";

const CMSPATH = typeof window === "undefined" 
? process.env.CMSPATH || "finexusgroup"
: window.ENV.CMSPATH|| "finexusgroup";

const languages = ["en-gb","ms-my","zh-cn","ta-my"]; // List of languages your app supports
const storyblokLanguage = {
  "en": "en",
  "ms": "ms",
  "zh": "zh",
  "ta": "ta",   
  "en-gb": "en", 
  "ms-my": "ms", 
  "zh-cn": "zh-cn",
  "ta-my": "ta",
}

const useCurrentLanguage = () => {
  const location = useLocation(); // Get info about the current webpage
  const currentPath = location.pathname; // Find out the current webpage address

  // Extract the first part of the path (language code) and match it to storyblokLanguage
  const pathParts = currentPath.split("/").filter(Boolean); // Remove empty strings
  const language = pathParts[0]; // Get the first part of the path
  const currentLanguage = storyblokLanguage[language] ? language : "en-gb"; // Default to "en-gb" if not found


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
    language = "en-gb";
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
