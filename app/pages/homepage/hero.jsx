import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
const hero = ({ blok }) => {
    const contentSection = sectionContent(blok.section);
    const styleSection = blok.styles.styleSection;
    contentSection.statement.styles=blok.styles;
    return (
        <XTag 
            tag="section"
            styleClass="relative bg-cover bg-center"
            cmsData={styleSection.wrapper}
            cmsDataRef="styleSection.wrapper"
            style={{
                backgroundImage: `url(${contentSection.backgroundImage.asset.filename})`
            }}
        >
            <XTag
                styleClass="absolute inset-0 bg-black opacity-0"
                cmsData={styleSection.element}
                cmsDataRef="styleSection.element"
            ></XTag>

            <XTag
                styleClass="relative flex justify-center items-center min-h-screen px-4"
                cmsData={styleSection.item}
                cmsDataRef="styleSection.item"
            >
                <XTag
                    styleClass="bg-white bg-opacity-90 max-w-3xl w-full mx-4 lg:mx-auto px-8 py-12 lg:py-16 rounded-lg shadow-lg"
                    cmsData={styleSection.unit}
                    cmsDataRef="styleSection.unit"
                >
                    <XTag
                        styleClass="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed whitespace-pre-line"
                        cmsData={styleSection.statement}
                        cmsDataRef="styleSection.textarea"
                    >
                        <StoryblokComponent blok={contentSection.statement} />
                        
                    </XTag>
                </XTag>
            </XTag>


        </XTag>
    )
};

export default hero;