import { sectionContent, pageStyle, getExcerpt } from "../utils/storyData";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";
import { StoryblokComponent } from "@storyblok/react";

const News = ({ blok }) => {
  const contentSection = sectionContent(blok.data.contents);
  const stylePage = pageStyle(blok.data.styles);
  const news=blok.data.news;
  // console.log('contents',contentSection);
  // console.log('news:',news);
  
  return (
        <XTag 
          tag='section' 
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
            >{contentSection.title.content}</XTag>
    
            {/* Filters (if applicable) */}
            <XTag 
              tag="ul" 
              styleClass="flex space-x-4 mb-8"
              cmsData={stylePage.yearSelector}
              cmsDataRef="stylePage.yearSelector"
            >
              {contentSection.years.content.split(',').map((year) => (
                <li key={year}>
                  <XTag tag="button"
                    styleClass="px-4 py-2 bg-white text-gray-700 rounded shadow hover:bg-indigo-50"
                    cmsData={stylePage.yearButtton}
                    cmsDataRef="stylePage.yearButton"
                    onClick={() => console.log(`Filter by ${year}`)} // Implement filtering logic
                  >
                    {year}
                  </XTag>
                </li>
              ))}
            </XTag>
    
            {/* News Grid */}
            <XTag 
              styleClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              cmsData={stylePage.newsGrid}
              cmsDataRef="stylePage.newsGrid"
            >
              {news.items.map((article) => (
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
                    {/* Article Title */}
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XTag 
                        tag="h2" 
                        styleClass="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                        cmsData={stylePage.newsTitle}
                        cmsDataRef="stylePage.newsTitle"
                      >
                        {article.title}
                      </XTag>
                    </a>
    
                    {/* Meta Information */}
                    <XTag tag="p" styleClass="text-sm text-gray-500 mt-2" cmsData={stylePage.newsDate} cmsDataRef="stylePage.newsDate">
                      {dateFormatter(article.datetime)}
                    </XTag>
    
                    {/* Excerpt */}
                    <XTag tag="p" styleClass="text-gray-600 mt-4" cmsData={stylePage.newsExcerpt} cmsDataRef="stylePage.newsExcerpt">
                      {article.excerpt?
                      <StoryblokComponent blok={{component:"richtext",content:article.excerpt}} />
                      :getExcerpt(article.content)}
                    </XTag>
    
                    {/* Read More Button */}
                    <XTag styleClass="mt-4" cmsData={stylePage.readmore} cmsDataRef="stylePage.readmore">
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
}
export default News;