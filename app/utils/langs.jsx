import { useLocation } from "@remix-run/react";

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

  // Look for a language in the webpage address. If not found, use English.
  const currentLanguage =
    languages.find((lang) => currentPath.startsWith(`/${lang}`)) || "en-gb";

  // Give back the webpage address and the language we found
  return { currentPath, currentLanguage };
};

const getCurrentLanguage = (request) => {
  let url = new URL(request.url);
  let pathParts = url.pathname.split("/");
  let language = pathParts[1];

  if (!languages.includes(language)) {
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

export { getTransLink, languages, languagesName, storyblokLanguage, useCurrentLanguage, getCurrentLanguage };
