import XTag from "../XTag";
import {
    StoryblokComponent
  } from "@storyblok/react";

const features = ({blok}) => {
    
    const styleSection = blok.styles.styleSection;
    
    return (

        <XTag
            tag="section"
            styleClass="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            cmsData={styleSection.wrapper}
            dataRef="styleSection.wrapper"
        >
            {blok.section.map((element,j) => {
                element.styles=blok.styles;
                return (
                    <XTag
                        styleClass="bg-white p-6 rounded-lg shadow-lg animate-fadeInUp"
                        cmsData={styleSection.container}
                        cmsDataRef="styleSection.container"
                    >
                        <StoryblokComponent key={j} blok={element} />
                    </XTag>
                )
            }

            )}

        </XTag>
    )
}

export default features;