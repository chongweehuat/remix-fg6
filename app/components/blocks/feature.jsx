import XTag from "../XTag";
import { blockStyle } from "../../utils/storyData";
const feature = ({ blok }) => {
    const titleClass=blockStyle(blok.titleclass,blok.styles);
    const contentClass=blockStyle(blok.contentclass,blok.styles);
    const linkClass=blockStyle(blok.linkclass,blok.styles);
    return (
        <>
            <XTag
                cmsData={titleClass}
                cmsDataRef={blok.titleclass}

            >{blok.title}</XTag>
            <XTag
                cmsData={contentClass}
                cmsDataRef={blok.contentclass}

            >{blok.content}</XTag>

            <XTag
                tag="a"
                href={blok.link.cached_url}
                cmsData={linkClass}
                cmsDataRef={blok.linkclass}
            >
                {blok.linkText} &gt;
            </XTag>
        </>
    )
}

export default feature;