import React, { useState } from 'react';
import { storyContent, storyStyle, getExcerpt } from "../utils/storyData";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";
import { StoryblokComponent } from "@storyblok/react";
import { Link } from '@remix-run/react';

const News = ({ blok }) => {

  const contentSection = storyContent(blok.data, "summary");
  const stylePage = storyStyle(blok.data, "summary");
  const year = blok.data.year;

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
        <XTag tag="ul" styleClass="flex space-x-4 mb-8" cmsData={stylePage.yearSelector}>
          {contentSection.years.content.split(',').map((eachYear) => ( 
            <li key={eachYear.trim()}>
              <Link 
                to={`/news/${eachYear.trim()}`} 
                className={`px-4 py-2 rounded shadow ${eachYear.trim() === String(year)
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {eachYear.trim()}
              </Link>
            </li>
          ))}
        </XTag>

        {/* News Grid */}
        <XTag
          styleClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          cmsData={stylePage.newsGrid}
          cmsDataRef="stylePage.newsGrid"
        >
          {blok.data.news.map((newsobj) =>{ 
            const article=newsobj.content;
            const slug=newsobj.slug;
            return (
            <XTag
              key={article._uid}
              styleClass="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              cmsData={stylePage.newsContainer}
              cmsDataRef="stylePage.newsContainer"
            >
              {/* Article Image */}
              <a
                href={`/news/${year}/${slug}`}
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
                  href={`/news/${year}/${slug}`}
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
                    href={`/news/${year}/${slug}`}
                    styleClass="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
                    cmsData={stylePage.readmoreLink}
                    cmsDataRef="stylePage.readmoreLink"
                    rel="noopener noreferrer"
                  >
                    {contentSection.readmore.content}
                  </XTag>
                </XTag>
              </XTag>
            </XTag>
          )})}
        </XTag>

      </XTag>

    </XTag>
  );
};
export default News;
