import { storyContent, storyStyle } from "../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";

const NewsBlog = ({ blok }) => {
  const contentSection = storyContent(blok.data, "blog");
  const stylePage = storyStyle(blok.data, "blog");
  const article = blok.data.news;
  const year = article.datetime.split("-")[0];

  return (
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
            <XTag 
              tag="a" 
              href={`/news/${year}`}
              styleClass="hover:underline text-blue-500" 
              cmsData={stylePage.breadcrumbLink} 
              cmsDataRef="stylePage.breadcrumbLink"
            >
              {contentSection.breadcrumb.content}
            </XTag> 
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
              tag="a" 
              href="https://www.finexusgroup.com/2024/09/18/" 
              styleClass="flex items-center space-x-2 hover:underline" 
              cmsData={stylePage.postMetadataLink} 
              cmsDataRef="stylePage.postMetadataLink"
            >
              <XTag 
                tag="i" 
                styleClass="fas fa-calendar" 
                cmsData={stylePage.postMetadataIcon} 
                cmsDataRef="stylePage.postMetadataIcon" 
              /> 
              {dateFormatter(article.datetime)}
            </XTag>
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
  );
};

export default NewsBlog;