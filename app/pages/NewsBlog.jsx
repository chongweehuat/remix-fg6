import { storyContent, storyStyle } from "../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";
import { useCurrentLanguage, getTransLink, getSlug } from "../utils/langs";
import { Link } from '@remix-run/react';

const NewsBlog = ({ blok }) => {
  const contentSection = storyContent(blok.data, "blog");
  const stylePage = storyStyle(blok.data, "blog");
  const article = blok.data.news;
  const year = article.datetime.split("-")[0];
  const { previous, next } = blok.data.PreviousAndNextBlogs;
  const prevYear = previous?.content.datetime?previous.content.datetime.split("-")[0]:0;
  const nextYear = next?.content.datetime?next.content.datetime.split("-")[0]:0;
  const { currentLanguage } = useCurrentLanguage();
  //console.log(previous);
  return (
    <>
      <XTag styleClass="bg-gray-100" cmsData={stylePage.wrapper} cmsDataRef="stylePage.wrapper">
        {/* Breadcrumb */}
        <XTag styleClass="container mx-auto py-4" cmsData={stylePage.container} cmsDataRef="stylePage.container">
          <XTag
            tag="ul"
            styleClass="flex items-center space-x-2 text-sm text-gray-600"
            cmsData={stylePage.breadcrumb}
            cmsDataRef="stylePage.breadcrumb"
          >
            <li>
              <Link to={`/${currentLanguage}/news/${year}`}>
                <XTag
                  styleClass="hover:underline text-blue-500"
                  cmsData={stylePage.breadcrumbLink}
                  cmsDataRef="stylePage.breadcrumbLink"
                >

                  {contentSection.breadcrumb.content}

                </XTag>
              </Link>
            </li>
            <li>
              <XTag
                tag="span"
                styleClass="text-gray-400"
                cmsData={stylePage.breadcrumbSeparator}
                cmsDataRef="stylePage.breadcrumbSeparator"
              >
                ›
              </XTag>
            </li>
            <li>
              <XTag
                tag="span"
                styleClass="text-gray-400"
                cmsData={stylePage.breadcrumbYear}
                cmsDataRef="stylePage.breadcrumbYear"
              >
                {year}
              </XTag>
            </li>
          </XTag>
        </XTag>

        {/* Post Title */}
        <XTag
          tag="div"
          styleClass="container mx-auto"
          cmsData={stylePage.postTitleWrapper}
          cmsDataRef="stylePage.postTitleWrapper"
        >
          <XTag
            tag="h1"
            styleClass="text-3xl font-bold text-gray-800"
            cmsData={stylePage.postTitle}
            cmsDataRef="stylePage.postTitle"
          >
            <StoryblokComponent blok={{ component: "richtext", content: article.title }} />
          </XTag>
        </XTag>

        {/* Featured Image */}
        <XTag
          tag="div"
          styleClass="container mx-auto mt-6"
          cmsData={stylePage.featuredImageWrapper}
          cmsDataRef="stylePage.featuredImageWrapper"
        >
          <XTag
            tag="figure"
            cmsData={stylePage.featuredImageFigure}
            cmsDataRef="stylePage.featuredImageFigure"
          >
            <XTag
              tag="img"
              src={article.image.filename}
              alt={article.title}
              styleClass="w-full rounded-md"
              cmsData={stylePage.newsImage}
              cmsDataRef="stylePage.newsImage"
            />
            <XTag
              tag="figcaption"
              styleClass="text-sm text-gray-500 mt-2"
              cmsData={stylePage.featuredImageCaption}
              cmsDataRef="stylePage.featuredImageCaption"
            >
              <StoryblokComponent blok={{ component: "richtext", content: article.imageDescription }} />
            </XTag>
          </XTag>
        </XTag>

        {/* Post Metadata */}
        <XTag
          tag="div"
          styleClass="container mx-auto mt-6 text-sm text-gray-600"
          cmsData={stylePage.postMetadataWrapper}
          cmsDataRef="stylePage.postMetadataWrapper"
        >
          <XTag
            tag="ul"
            styleClass="flex items-center space-x-6"
            cmsData={stylePage.postMetadataList}
            cmsDataRef="stylePage.postMetadataList"
          >
            <li>
              
                <XTag
                  tag="i"
                  styleClass="fas fa-calendar"
                  cmsData={stylePage.postMetadataIcon}
                  cmsDataRef="stylePage.postMetadataIcon"
                />
                {dateFormatter(article.datetime)}
              
            </li>
          </XTag>
        </XTag>

        {/* Post Content */}
        <XTag
          tag="div"
          styleClass="container mx-auto mt-8"
          cmsData={stylePage.postContentWrapper}
          cmsDataRef="stylePage.postContentWrapper"
        >
          <StoryblokComponent blok={{ component: "richtext", content: article.content }} />
        </XTag>
      </XTag>
      {(previous || next) && (
        <XTag
          tag="section"
          styleClass="bg-white py-6"
          cmsData={stylePage.navigationWrapper}
          cmsDataRef="stylePage.navigationWrapper"
        >
          <XTag
            styleClass="container mx-auto px-4"
            cmsData={stylePage.navigationContainer}
            cmsDataRef="stylePage.navigationContainer"
          >
            <XTag
              styleClass="flex flex-col md:flex-row items-center justify-between"
              cmsData={stylePage.navigationFlex}
              cmsDataRef="stylePage.navigationFlex"
            >
              {/* Previous Post */}
              {previous && (
                <XTag
                  styleClass="text-left mb-4 md:mb-0 md:w-1/2"
                  cmsData={stylePage.previousPostWrapper}
                  cmsDataRef="stylePage.previousPostWrapper"
                >
                  <Link
                    to={`/${currentLanguage}/news/${prevYear}/${previous.slug}`}
                    rel="prev"
                    className="flex items-center hover:text-gray-900 transition-colors duration-200"
                  >
                    <i className="fa fa-angle-left mr-2 text-gray-400" aria-hidden="true"></i>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase block mb-1">
                        {contentSection.previousLabel.content}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        <StoryblokComponent
                          blok={{ component: "richtext", content: previous.content.title }}
                        />
                      </span>
                    </div>
                  </Link>
                </XTag>
              )}

              {/* Separator */}
              {previous && next && (
                <XTag
                  tag="div"
                  styleClass="hidden md:block border-l border-gray-300 mx-4 h-8"
                  cmsData={stylePage.navigationSeparator}
                  cmsDataRef="stylePage.navigationSeparator"
                />
              )}

              {/* Next Post */}
              {next && (
                <XTag
                  styleClass="text-right md:w-1/2"
                  cmsData={stylePage.nextPostWrapper}
                  cmsDataRef="stylePage.nextPostWrapper"
                >
                  <Link
                    to={`/${currentLanguage}/news/${nextYear}/${next.slug}`}
                    rel="next"
                    className="flex items-center justify-end hover:text-gray-900 transition-colors duration-200"
                  >
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase block mb-1">
                        {contentSection.nextLabel.content}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        <StoryblokComponent
                          blok={{ component: "richtext", content: next.content.title }}
                        />
                      </span>
                    </div>
                    <i className="fa fa-angle-right ml-2 text-gray-400" aria-hidden="true"></i>
                  </Link>
                </XTag>
              )}
            </XTag>
          </XTag>
        </XTag>
      )}

    </>
  );
};

export default NewsBlog;