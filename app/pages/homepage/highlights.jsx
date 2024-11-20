import XTag from "../../components/XTag";
import { sectionContent } from "../../utils/storyData";
import { StoryblokComponent } from "@storyblok/react";
import dateFormatter from "../../utils/dateFormatter";

const highlights = ({ blok }) => {
    const contentSection = sectionContent(blok.section);
    const styleSection = blok.styles.styleSection;
    const items = contentSection.newshighlights.items;
    //console.log(contentSection);
    return (
        <XTag 
            tag="section" 
            styleClass="bg-gray-100 py-8"
            cmsData={styleSection.wrapper}
            cmsDataRef="styleSection.wrapper"
        >
            <XTag 
                styleClass="container mx-auto px-4"
                cmsData={styleSection.container}
                cmsDataRef="styleSection.container"
            >
                
                <XTag styleClass="mb-6" cmsData={styleSection.titleWrapper} cmsDataRef="styleSection.titleWrapper">
                    <StoryblokComponent blok={contentSection.title} />
                </XTag>

                {/* Responsive Grid */}
                <XTag 
                    styleClass="grid grid-cols-1 lg:grid-cols-4 gap-6"
                    cmsData={styleSection.newsWrapper}
                    cmsDataRef="styleSection.newsWrapper"
                >
                    {/* Left Main Post */}
                    <XTag 
                        styleClass="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden"
                        cmsData={styleSection.mainPostWrapper}
                        cmsDataRef="styleSection.mainPostWrapper"
                    >
                        <a href={items[0].link?.cached_url}>
                            <XTag 
                                tag="img"
                                src={items[0].image.filename}
                                alt={items[0].title}
                                styleClass="w-full h-64 object-cover"
                                cmsData={styleSection.mainPostImage}
                            />
                        </a>
                        <XTag styleClass="p-4" cmsData={styleSection.mainPostContainer} cmsDataRef="styleSection.mainPostContainer">
                            <XTag 
                                tag="a"
                                href={items[0].link?.cached_url}
                                styleClass="text-lg font-bold text-gray-800 hover:text-blue-500"
                                cmsData={styleSection.titleLink}
                                cmsDataRef="styleSection.titleLink"
                            >
                                {items[0].title}
                            </XTag>
                            <XTag tag="p" styleClass="text-sm text-gray-600 mt-2" cmsData={styleSection.date} cmsDataRef="styleSection.date" >
                                {dateFormatter(items[0].datetime)}
                            </XTag>
                            <XTag
                                tag="p"
                                styleClass="text-sm text-gray-700 mt-2"
                                cmsData={styleSection.content}
                                cmsDataRef="styleSection.content"
                            >
                               <StoryblokComponent blok={{component:"richtext",content:items[0].content}} />
                            </XTag>
                            
                            <XTag 
                                tag="a"
                                href={items[0].link?.cached_url}
                                styleClass="text-blue-500 hover:underline mt-2 inline-block"
                                cmsData={styleSection.linkLabel}
                                cmsDataRef="styleSection.linkLabel"
                            >    
                                {contentSection.linkLabel.content}
                            </XTag>
                        </XTag>
                    </XTag>

                    {/* Right Grid of Smaller Posts */}
                    <XTag styleClass="lg:col-span-2 grid grid-cols-1 gap-6" cmsData={styleSection.subPostWrapper} cmsDataRef="styleSection.subPostWrapper">
                        {items.slice(1).map((item,j) => {
                            return (
                                <XTag 
                                    styleClass="flex bg-white shadow-md rounded-lg overflow-hidden"
                                    cmsData={styleSection.subPostContainer}
                                    cmsDataRef="styleSection.subPostContainer"
                                >
                                    <XTag 
                                        tag="a" 
                                        href="https://www.finexusgroup.com/e-invoicing-feasible-for-msmes/" 
                                        styleClass="flex-shrink-0"
                                        cmsData={styleSection.subPostImageLink}
                                    >
                                        <XTag 
                                            tag="img"
                                            src={item.image.filename}
                                            alt={item.title}
                                            styleClass="w-32 h-32 object-cover"
                                            cmsData={styleSection.subPostImage}
                                        />
                                    </XTag>
                                    <XTag styleClass="p-4 flex flex-col" cmsData={styleSection.subPostMain} cmsDataRef="styleSection.subPostMain" >
                                        
                                        <XTag 
                                            tag="a"
                                            href={item.link?.cached_url}
                                            styleClass="text-lg font-bold text-gray-800 hover:text-blue-500"
                                            cmsData={styleSection.titleLink}
                                            cmsDataRef="styleSection.titleLink"
                                        >
                                            {item.title}
                                        </XTag>
                                        
                                        <XTag tag="p" styleClass="text-sm text-gray-600 mt-2" cmsData={styleSection.date} cmsDataRef="styleSection.date" >
                                            {dateFormatter(item.datetime)}
                                        </XTag>

                                        <XTag
                                            tag="p"
                                            styleClass="text-sm text-gray-700 mt-2 flex-grow"
                                            cmsData={styleSection.subPostContent}
                                            cmsDataRef="styleSection.subPostContent"
                                        >
                                            <StoryblokComponent blok={{component:"richtext",content:item.content}} />
                                        </XTag>
                                        
                                        <XTag 
                                            tag="a"
                                            href={item.link?.cached_url}
                                            styleClass="text-blue-500 hover:underline mt-2 inline-block"
                                            cmsData={styleSection.linkLabel}
                                            cmsDataRef="styleSection.linkLabel"
                                        >    
                                            {contentSection.linkLabel.content}
                                        </XTag>
                                    </XTag>
                                </XTag>
                            )})}
                        
                    </XTag>
                </XTag>
            </XTag>
        </XTag>



    )
}

export default highlights;