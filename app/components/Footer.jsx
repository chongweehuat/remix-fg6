import { FiLinkedin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { storyData, storyContent, storyStyle } from "../utils/storyData";
import reduceArrayByKey from "../utils/reduceArrayByKey";
import XTag from "./XTag";

const Footer = ({ blok }) => {
    const contentLeft = storyContent(blok.footer, "left");
    const contentRight = storyContent(blok.footer, "right");
    const stylePage = storyStyle(blok.footer, "page");
    const styleLeft = storyStyle(blok.footer, "left");
    const styleRight = storyStyle(blok.footer, "right");
    const socialLinks = reduceArrayByKey(contentLeft.socialLinks.items, "name");
    // console.log(socialLinks);
    return (
        <>
            <XTag
                tag="footer"
                styleClass="bg-gray-800 text-white py-8"
                cmsData={stylePage.wrapper}
                cmsDataRef="stylePage.wrapper"
            >
                <XTag
                    styleClass="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4"
                    cmsData={stylePage.container}
                    cmsDataRef="stylePage.container"
                >
                    <XTag
                        styleClass="flex flex-col items-center md:items-start"
                        cmsData={styleLeft.wrapper}
                        cmsDataRef="styleLeft.wrapper"
                    >
                        <XTag
                            tag="p"
                            styleClass="text-lg mb-4"
                            cmsData={styleLeft.socialLinkTtitle}
                            cmsDataRef="styleLeft.socialLinkTtitle"
                        >
                            {contentLeft.socialLinkTtitle.content}
                        </XTag>
                        <XTag
                            styleClass="flex space-x-4"
                            cmsData={styleLeft.socialLinksWrapper}
                            cmsDataRef="styleLeft.socialLinksWrapper"
                        >
                            <XTag
                                tag="a"
                                href={socialLinks.linkin.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                styleClass="text-white hover:text-blue-400"
                                cmsData={styleLeft.socialLink}
                                cmsDataRef="styleLeft.socialLink"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <XTag
                                    tag={FiLinkedin}
                                    styleClass="h-6 w-6"
                                    cmsData={styleLeft.socialIcons}
                                    cmsDataRef="styleLeft.socialIcons"
                                />
                            </XTag>
                            <XTag
                                tag="a"
                                href={socialLinks.facebook.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                styleClass="text-white hover:text-blue-400"
                                cmsData={styleLeft.socialLink}
                                cmsDataRef="styleLeft.socialLink"
                            >
                                <span className="sr-only">Facebook</span>
                                <XTag
                                    tag={FiFacebook}
                                    styleClass="h-6 w-6"
                                    cmsData={styleLeft.socialIcons}
                                    cmsDataRef="styleLeft.socialIcons"
                                />
                            </XTag>
                            <XTag
                                tag="a"
                                href={socialLinks.instagram.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                styleClass="text-white hover:text-blue-400"
                                cmsData={styleLeft.socialLink}
                                cmsDataRef="styleLeft.socialLink"
                            >
                                <span className="sr-only">Instagram</span>
                                <XTag
                                    tag={FiInstagram}
                                    styleClass="h-6 w-6"
                                    cmsData={styleLeft.socialIcons}
                                    cmsDataRef="styleLeft.socialIcons"
                                />
                            </XTag>
                            <XTag
                                tag="a"
                                href={socialLinks.youtube.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                styleClass="text-white hover:text-blue-400"
                                cmsData={styleLeft.socialLink}
                                cmsDataRef="styleLeft.socialLink"
                            >
                                <span className="sr-only">Youtube</span>
                                <XTag
                                    tag={FiYoutube}
                                    styleClass="h-6 w-6"
                                    cmsData={styleLeft.socialIcons}
                                    cmsDataRef="styleLeft.socialIcons"
                                />
                            </XTag>
                        </XTag>
                        <XTag 
                        tag="p" 
                        styleClass="mt-4" 
                        cmsData={styleLeft.copyright} 
                        cmsDataRef="styleLeft.copyright"
                        >
                            {contentLeft.copyright.content}
                        </XTag>
                    </XTag>

                    <XTag
                        styleClass="flex flex-col items-center md:items-start"
                        cmsData={styleRight.wrapper}
                        cmsDataRef='styleRight.wrapper'
                    >
                        <XTag
                            tag="h2"
                            styleClass="text-lg mb-2"
                            cmsData={styleRight.title}
                            cmsDataRef='styleRight.title'
                            
                        >{contentRight.title.content}</XTag>
                        <XTag
                            styleClass="flex flex-col md:flex-row md:space-x-4"
                            cmsData={styleRight.content}
                            cmsDataRef='styleRight.content'
                        >
                            <XTag
                                styleClass="text-sm text-center md:text-left"
                                cmsData={styleRight.ContentLeft}
                                cmsDataRef='styleRight.ContentLeft'
                            >{contentRight.leftContent.content}</XTag>
                            <XTag
                                css="text-sm text-center md:text-left"
                                cmsData={styleRight.ContentRight}
                                cmsDataRef='styleRight.ContentRight'
                                
                            >{contentRight.rightContent.content}</XTag>
                        </XTag>
                    </XTag>     

                </XTag>
            </XTag>
        </>
    );
}

export default Footer;