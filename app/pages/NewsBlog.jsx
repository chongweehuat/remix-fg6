import { storyContent, storyStyle } from "../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
import XTag from "../components/XTag";
import dateFormatter from "../utils/dateFormatter";
const NewsBlog = ({ blok }) => {
    const contentSection = storyContent(blok.data, "blog");
    const stylePage = storyStyle(blok.data, "blog");
    const article = blok.data.news;
    
    return (
        <div className="bg-gray-100">
          {/* Breadcrumb */}
          <div className="container mx-auto py-4">
            <ul className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/news" className="hover:underline text-blue-500">
                  News
                </a>
              </li>
              <li>
                <span className="text-gray-400">›</span>
              </li>
              <li>
                <span>2024</span>
              </li>
            </ul>
          </div>
    
          {/* Post Title */}
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">
            <StoryblokComponent blok={{ component: "richtext", content: article.title }} />
            </h1>
          </div>
    
          {/* Featured Image */}
          <div className="container mx-auto mt-6">
            <figure>
            <XTag
                    tag="img"
                    src={article.image.filename}
                    alt={article.title}
                    styleClass="w-full rounded-md"
                    cmsData={stylePage.newsImage}
                    cmsDataRef="stylePage.newsImage"
                  />
              <figcaption className="text-sm text-gray-500 mt-2">
              <StoryblokComponent blok={{ component: "richtext", content: article.imageDescription }} />
              </figcaption>
            </figure>
          </div>
    
          {/* Post Metadata */}
          <div className="container mx-auto mt-6 text-sm text-gray-600">
            <ul className="flex items-center space-x-6">
              <li>
                <a
                  href="https://www.finexusgroup.com/2024/09/18/"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <i className="fas fa-calendar"></i>
                  {dateFormatter(article.datetime)}
                </a>
              </li>
            </ul>
          </div>
    
          {/* Post Content */}
          <div className="container mx-auto mt-8">
          <StoryblokComponent blok={{ component: "richtext", content: article.content }} />
          </div>
        </div>
      );
}

export default NewsBlog;