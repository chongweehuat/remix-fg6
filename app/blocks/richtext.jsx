import XTag from "../components/XTag";
import { blockStyle } from "../utils/storyData";
const richtext = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    return (
        <XTag tag="textarea" cmsData={blokClass} cmsDataRef={blok.class}>{blok.content.content[0].content[0].text}</XTag>
    )
}

export default richtext;