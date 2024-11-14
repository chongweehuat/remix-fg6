import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";

const features = ({blok}) => {
    
    const styleSection = blok.styles.styleSection;
    
    return (

        <XTag
            tag="section"
            styleClass="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            cmsData={styleSection.wrapper}
            dataRef="styleSection.wrapper"
        >
            {blok.section.map((element) => {
                return (
                    <XTag
                        styleClass="bg-white p-6 rounded-lg shadow-lg animate-fadeInUp"
                        cmsData={styleSection.container}
                        cmsDataRef="styleSection.container"
                    >
                        <XTag
                            styleClass="text-xl font-semibold mb-4"
                            cmsData={styleSection.element}
                            cmsDataRef="styleSection.element"

                        >{element.title}</XTag>
                        <XTag
                            styleClass="text-gray-700 mb-6"
                            cmsData={styleSection.item}
                            cmsDataRef="styleSection.item"

                        >{element.content}</XTag>

                        <XTag
                            tag="a"
                            href="https://www.finexusgroup.com/regulatory-solutions/"
                            styleClass="text-blue-600 font-semibold hover:underline"
                            cmsData={styleSection.unit}
                            cmsDataRef="styleSection.unit"
                        >
                            {element.linkText} &gt;
                        </XTag>
                    </XTag>
                )
            }

            )}

        </XTag>
    )
}

export default features;