import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";

const callaction = ({blok}) => {
    const contentSection = sectionContent(blok.section);
    const styleSection = blok.styles.styleSection;

    return (
        <XTag
            tag="section"
            styleClass="relative w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-16"
            cmsData={styleSection.wrapper}
            cmsDataRef="styleSection.wrapper"
        >
            <XTag
                styleClass="absolute inset-0 bg-black opacity-30"
                cmsData={styleSection.container}
                cmsDataRef="styleSection.container"
            ></XTag>
            <XTag

                styleClass="relative max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8"
                cmsData={styleSection.element}
                cmsDataRef="styleSection.element"
            >
                <XTag
                    tag="a"
                    href={contentSection.contactus.link.cached_url}
                    styleClass="relative flex flex-col items-start p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    cmsData={styleSection.classLink}
                    cmsDataRef="styleSection.classLink"
                >

                    <XTag
                        styleClass="absolute inset-0 bg-cover bg-center rounded-lg"
                        cmsData={styleSection.bgcontactus}
                        cmsDataRef="styleSection.bgcontactus"
                        style={{
                            backgroundImage: `url(${contentSection.bgcontactus.asset.filename})`
                        }}

                    ></XTag>
                    <XTag

                        styleClass="relative z-10"
                        cmsData={styleSection.unit}
                        cmsDataRef="styleSection.unit"
                    >
                        <XTag
                            tag="h2"
                            styleClass="text-2xl font-bold text-white mb-4"
                            cmsData={styleSection.classTitle}
                            cmsDataRef="styleSection.classTitle"

                        >{contentSection.contactus.title}</XTag>
                        <XTag
                            tag="p"
                            styleClass="text-white mb-6"
                            cmsData={styleSection.classContent}
                            cmsDataRef="styleSection.classContent"

                        >
                            {contentSection.contactus.content}
                        </XTag>
                        <XTag
                            tag="span"
                            styleClass="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
                            cmsData={styleSection.classButton}
                            cmsDataRef="styleSection.classButton"

                        >
                            {contentSection.contactus.linkText}
                        </XTag>
                    </XTag>
                </XTag>


                <XTag
                    tag="a"
                    href={contentSection.careers.link.cached_url}
                    styleClass="relative flex flex-col items-start p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    cmsData={styleSection.classLink}
                    cmsDataRef="styleSection.classLink"
                >
                    <XTag
                        styleClass="absolute inset-0 bg-cover bg-center rounded-lg"
                        cmsData={styleSection.bgcareers}
                        cmsDataRef="styleSection.bgcareers"
                        style={{
                            backgroundImage: `url(${contentSection.bgcareers.asset.filename})`
                        }}

                    ></XTag>
                    <XTag

                        styleClass="relative z-10"
                        cmsData={styleSection.unit}
                        cmsDataRef="styleSection.unit"
                    >

                        <XTag
                            tag="h2"
                            styleClass="text-2xl font-bold text-white mb-4"
                            cmsData={styleSection.classTitle}
                            cmsDataRef="styleSection.classTitle"

                        >{contentSection.careers.title}</XTag>
                        <XTag
                            tag="p"
                            styleClass="text-white mb-6"
                            cmsData={styleSection.classContent}
                            cmsDataRef="styleSection.classContent"

                        >
                            {contentSection.careers.content}</XTag>
                        <XTag
                            tag="span"
                            styleClass="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
                            cmsData={styleSection.classButton}
                            cmsDataRef="styleSection.classButton"

                        >    {contentSection.careers.linkText}
                        </XTag>
                    </XTag>
                </XTag>
            </XTag>
        </XTag>

    )
}

export default callaction;