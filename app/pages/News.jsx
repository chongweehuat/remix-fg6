import React, { useState } from 'react';
import { sectionContent, pageStyle, getExcerpt } from "../utils/storyData";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";
import { StoryblokComponent } from "@storyblok/react";

const News = ({ blok }) => {
  const filterNewsByYear = (year) => {
    return blok.data.news.filter((article) => {
      const articleYear = new Date(article.datetime).getFullYear();
      return articleYear === year;
    });
  };

  const [news, setNews] = useState(filterNewsByYear(new Date().getFullYear()));
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearSelection = (year) => {
    setNews(filterNewsByYear(year));
    setSelectedYear(year);
  };

  const contentSection = sectionContent(blok.data.contents);
  const stylePage = pageStyle(blok.data.styles);

  return (
    <XTag 
      tag="section" 
      styleClass="bg-gray-100 py-10"
      cmsData={stylePage.wrapper}
      cmsDataRef="stylePage.wrapper"
    >
      <XTag 
        styleClass="container mx-auto px-4"
        cmsData={stylePage.container}
        cmsDataRef="stylePage.container"
      >
        {/* Page Title */}
        <XTag 
          tag="h1" 
          styleClass="text-4xl font-bold text-gray-800 mb-8"
          cmsData={stylePage.title}
          cmsDataRef="stylePage.title"
        >
          {contentSection.title.content}
        </XTag>

        {/* Filters */}
        <XTag 
          tag="ul" 
          styleClass="flex space-x-4 mb-8"
          cmsData={stylePage.yearSelector}
          cmsDataRef="stylePage.yearSelector"
        >
          {contentSection.years.content.split(',').map((year) => {
            const numericYear = Number(year.trim());
            return (
              <li key={numericYear}>
                <XTag 
                  tag="button"
                  styleClass={`px-4 py-2 rounded shadow ${
                    selectedYear === numericYear
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50'
                  }`}
                  cmsData={`${stylePage.yearButton} ${
                    selectedYear === numericYear
                      ? stylePage.yearSelectedButton
                      : stylePage.yearNotSelectedButton
                  }`}
                  cmsDataRef="stylePage.yearButton"
                  onClick={() => handleYearSelection(numericYear)}
                >
                  {numericYear}
                </XTag>
              </li>
            );
          })}
        </XTag>

        {/* News Grid */}
        <XTag 
          styleClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          cmsData={stylePage.newsGrid}
          cmsDataRef="stylePage.newsGrid"
        >
          {news.map((article) => (
            <XTag
              key={article._uid}
              styleClass="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              cmsData={stylePage.newsContainer}
              cmsDataRef="stylePage.newsContainer"
            >
              {/* Article Image */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <XTag 
                  tag="img"
                  src={article.image.filename}
                  alt={article.title}
                  styleClass="w-full h-48 object-cover"
                  cmsData={stylePage.newsImage}
                  cmsDataRef="stylePage.newsImage"
                />
              </a>

              {/* Article Content */}
              <XTag 
                styleClass="p-4"
                cmsData={stylePage.newsContent}
                cmsDataRef="stylePage.newsContent"
              >
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XTag 
                    styleClass="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                    cmsData={stylePage.newsTitle}
                    cmsDataRef="stylePage.newsTitle"
                  >
                    <StoryblokComponent blok={{ component: "richtext", content: article.title }} />
                  </XTag>
                </a>

                <XTag 
                  tag="p" 
                  styleClass="text-sm text-gray-500 mt-2" 
                  cmsData={stylePage.newsDate} 
                  cmsDataRef="stylePage.newsDate"
                >
                  {dateFormatter(article.datetime)}
                </XTag>

                
                {getExcerpt(article.excerpt)
                  ? <XTag 
                    styleClass="mt-4" 
                    cmsData={stylePage.newsRichTextExcerpt} 
                    cmsDataRef="stylePage.newsRichTextExcerpt"
                    >
                      <StoryblokComponent blok={{ component: "richtext", content: article.excerpt }} />
                    </XTag>
                  : <XTag 
                      styleClass="text-gray-600 mt-4" 
                      cmsData={stylePage.newsExcerpt} 
                      cmsDataRef="stylePage.newsExcerpt"
                    >
                      {getExcerpt(article.content)}
                    </XTag>
                }
                    
                <XTag 
                  styleClass="mt-4" 
                  cmsData={stylePage.readmore} 
                  cmsDataRef="stylePage.readmore"
                >
                  <XTag 
                    tag="a"
                    href=""
                    styleClass="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
                    cmsData={stylePage.readmoreLink}
                    cmsDataRef="stylePage.readmoreLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contentSection.readmore.content}
                  </XTag>
                </XTag>
              </XTag>
            </XTag>
          ))}
        </XTag>
      </XTag>
    </XTag>
  );
};
export default News;
