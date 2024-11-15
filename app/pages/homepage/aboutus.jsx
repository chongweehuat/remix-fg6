import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
const aboutus = ({ blok }) => {
    const contentSection = sectionContent(blok.section);
    const styleSection = blok.styles.styleSection;
    contentSection.title.styles=blok.styles;
    contentSection.content.styles=blok.styles;
    return (
    <XTag
        tag="section"
        cmsData={styleSection.wrapper}
        cmsDataRef="styleSection.wrapper"
    >
        <XTag
            styleClass="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto px-4 py-16 lg:py-24 gap-8 lg:gap-16"
            cmsData={styleSection.container}
            cmsDataRef="styleSection.container"
        >

            <XTag
                styleClass="w-full lg:w-1/2 animate-fadeInLeft"
                cmsData={styleSection.element}
                cmsDataRef="styleSection.element"
            >
                <XTag
                    styleClass="text-xl lg:text-2xl font-semibold text-gray-800 mb-4"
                    cmsData={styleSection.heading}
                    cmsDataRef="styleSection.heading"
                >{contentSection.heading.content}</XTag>
                <XTag
                    styleClass="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-6"
                    cmsData={styleSection.title}
                    cmsDataRef="styleSection.title"
                >
                    <StoryblokComponent blok={contentSection.title} />
                </XTag>
            </XTag>

            <XTag
                styleClass="w-full lg:w-1/2 animate-fadeInRight"
                cmsData={styleSection.item}
                cmsDataRef="styleSection.item"
            >
                <XTag
                    styleClass="text-gray-700 leading-relaxed mb-6"
                    cmsData={styleSection.content}
                    cmsDataRef="styleSection.content"

                >
                    <StoryblokComponent blok={contentSection.content} />
                </XTag>
                <XTag
                    styleClass="text-left lg:text-left"
                    cmsData={styleSection.unit}
                    cmsDataRef="styleSection.unit"
                >
                    <XTag
                        tag="a"
                        href={contentSection.link.link.cached_url}
                        styleClass="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
                        cmsData={styleSection.link}
                        cmsDataRef="styleSection.link"
                    >
                        {contentSection.link.content}
                    </XTag>
                </XTag>
            </XTag>
        </XTag>
    </XTag>)
}

export default aboutus;