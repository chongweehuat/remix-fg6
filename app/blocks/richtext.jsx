import { richTextResolver } from "@storyblok/richtext";
import XTag from "../components/XTag";
import { blockStyle } from "../utils/storyData";
const richtext = ({blok}) => {
    const {render} = richTextResolver();
    const blokClass=blockStyle(blok.class,blok.styles);
    const html= render(blok.content);
    return (
        <XTag tag="textarea" cmsData={blokClass} cmsDataRef={blok.class}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </XTag>
    )
}

export default richtext;