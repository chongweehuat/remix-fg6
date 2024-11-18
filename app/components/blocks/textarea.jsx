import XTag from "../XTag";
import { blockStyle } from "../../utils/storyData";
const textarea = ({blok}) => {
    const blokClass=blockStyle(blok.class,blok.styles);
    return (
        <XTag tag="textarea" cmsData={blokClass} cmsDataRef={blok.class}>{blok.content}</XTag>
    )
}

export default textarea;