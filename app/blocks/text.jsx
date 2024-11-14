import XTag from "../components/XTag";
import { blockStyle } from "../utils/storyData";
const text = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    return (
        <XTag tag="span" cmsData={blokClass} cmsDataRef={blok.class}>{blok.content}</XTag>
    )
}

export default text;